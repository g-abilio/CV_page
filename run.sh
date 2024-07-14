#!/bin/bash
# run html file

if [[ "$OSTYPE" == "linux-gnu" ]]; then
    browser="firefox" 

elif [[ "$(uname -s)" == "Darwin" ]]; then
    browser="open"

elif [[ "$OSTYPE" == "cygwin" || "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    browser="start"

else
    echo "Unsupported operating system."
    exit 1
fi

$browser "cv.html"