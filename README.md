# MongoDB $inc Operator with Invalid Values

This repository demonstrates an uncommon error when using MongoDB's `$inc` operator with invalid numerical values such as `NaN` (Not a Number) or `Infinity`.  Incorrect usage can lead to unexpected behavior, including silent failures or inaccurate updates.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides the corrected implementation.

## How to reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create a collection named 'myCollection' with a document containing a numerical field 'count'.
3.  Run the code in `bug.js`.
4.  Observe the unexpected results or errors.

## Solution

The solution involves validating the input values before using them with the `$inc` operator.  The corrected code is in `bugSolution.js`.