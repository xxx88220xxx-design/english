#!/bin/bash
# حارس الخادم: لو طار، يرجّعه خلال 5 ثواني
cd /root/workspace/english || exit 1
while true; do
  if ! curl -s -m 3 -o /dev/null http://127.0.0.1:8899/index.html; then
    echo "[$(date +%H:%M:%S)] restarting server..." >> /tmp/opencode/watch.log
    setsid nohup python3 serve.py 8899 >> /tmp/opencode/srv.log 2>&1 </dev/null &
    sleep 3
  fi
  sleep 5
done
