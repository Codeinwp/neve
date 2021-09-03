#!/bin/bash
# Set Arguments
file1="$1"
file2="$2"

if [[ $(podiff $file1 $file2) ]]; then
		podiff $file1 $file2
    exit 1
else
    echo "No differences found"
fi
