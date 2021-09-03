#!/bin/bash
# Set Arguments
file1="$1"
file2="$2"

if [[ $(podiff $file1 $file2) ]]; then
		podiff $file1 $file2
		echo "::set-output name=has_pot_diff::failure"
else
		echo "::set-output name=has_pot_diff::success"
    echo "No differences found"
fi
