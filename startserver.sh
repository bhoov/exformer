#!/bin/bash
ray start --node-ip-address=127.0.0.1 --redis-port=6379 --head > /tmp/rayNotice 2> /tmp/rayError
report=$(</tmp/rayError)
nerrors=$(echo $report | grep "RuntimeError" | wc -l)
if [ $nerrors -gt 0 ]; then
    echo "Reusing existing ray Redis"
else
    echo "Initializing ray: $report"
    printf "\n\n==================\n\n"
fi
uvicorn server.main:app

