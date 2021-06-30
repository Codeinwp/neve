#!/bin/bash
# Set Arguments
file1="$1"
file2="$2"
PERCENT_TRESHOLD=${3-2}

# Get new lines between the 2 files
new=$(diff -u $file1 $file2 | grep -E "^\+msgid" | sed -E 's/^\+//' <<< $(wc -l))

# Get the total lines from the base file
total=$(cat $file1 | grep -E "^\msgid" | sed -E 's/^\+//' <<< $(wc -l))

# Compute the difference
pdiff=$(awk '{print $1*100/$2}' <<<"${new} ${total}")

if [[ $pdiff > $PERCENT_TRESHOLD ]]
then
	echo "Greater then $PERCENT_TRESHOLD% difference $pdiff% | new lines $new from total $total"
	exit 1;
else
	echo "Less than $PERCENT_TRESHOLD% difference $pdiff% | new lines $new from total $total"
	exit 0;
fi
