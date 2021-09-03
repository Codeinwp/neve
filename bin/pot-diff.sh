#!/bin/bash
# Set Arguments
file1="$1"
file2="$2"

## Striping headers for file1 and file2.

sed '/^"/d' $file1 > $file1.edited
mv $file1.edited  $file1
sed '/^"/d' ${file2} > ${file2}.edited
mv ${file2}.edited  ${file2}

if [[ $(podiff $file1 $file2) ]]; then
		podiff $file1 $file2
		echo "::set-output name=has_pot_diff::failure"
else
		echo "::set-output name=has_pot_diff::success"
    echo "No differences found"
fi
