#!/usr/bin/env python3
"""حارس دائم للموقع: يعيد تشغيل serve.py تلقائياً إذا طفا.

يشتغل كـ daemon حقيقي (double-fork) فيتفصل عن الطرفية بالكامل
ويبقى حياً حتى لو قفلت التطبيق.
الاستخدام:  python3 watchd.py          (يشغّل الحارس في الخلفية)
            python3 watchd.py stop     (يوقف الحارس)
            python3 watchd.py status   (يطبع الحالة)
"""
import os
import subprocess
import sys
import time
import urllib.request

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = 8899
SRV = os.path.join(ROOT, "serve.py")
LOG = "/tmp/opencode/srv.log"
PIDF = "/tmp/opencode/watchd.pid"
DEVNULL = os.open(os.devnull, os.O_RDWR)


def alive(timeout=4):
    try:
        with urllib.request.urlopen("http://127.0.0.1:%d/index.html" % PORT, timeout=timeout) as r:
            return r.status == 200
    except Exception:
        return False


def start_server():
    try:
        with open(LOG, "ab") as f:
            subprocess.Popen(
                [sys.executable, SRV, str(PORT)],
                cwd=ROOT, stdout=f, stderr=f, stdin=DEVNULL,
                start_new_session=True,
            )
    except Exception:
        pass


def supervise():
    while True:
        if not alive():
            start_server()
            for _ in range(15):          # انتظر حتى يطلع 200
                time.sleep(2)
                if alive():
                    break
        time.sleep(5)


def daemonize():
    if os.fork() > 0:
        os._exit(0)      # الأب يخرج
    os.setsid()          # جلسة جديدة
    if os.fork() > 0:
        os._exit(0)      # يتيتّم: الحارس يبقى من غير طرفية
    os.chdir("/")
    os.dup2(DEVNULL, 0)
    os.dup2(DEVNULL, 1)
    os.dup2(DEVNULL, 2)
    with open(PIDF, "w") as f:
        f.write(str(os.getpid()))


def read_pid():
    try:
        with open(PIDF) as f:
            return int(f.read().strip())
    except Exception:
        return None


def stop():
    pid = read_pid()
    if pid:
        for p in (pid,):
            try:
                os.kill(p, 15)
                print("أُوقف الحارس %d" % p)
            except Exception:
                pass
    else:
        print("ما فيه حارس شغّال")
    try:
        os.remove(PIDF)
    except Exception:
        pass


def status():
    pid = read_pid()
    ok = pid is not None and os.path.exists("/proc/%d" % pid)
    print("الحارس: %s%s" % ("شغّال PID=%d" % pid if ok else "متوقف", ""))
    print("السيرفر: %s" % ("200" if alive() else "مطفي"))


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "start"
    if cmd == "stop":
        stop()
    elif cmd == "status":
        status()
    else:
        daemonize()
        supervise()
