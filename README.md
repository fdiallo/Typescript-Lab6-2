1. It is important to handle error at the end of each individual API call because each call may have different error type.
2. Custom error classes improves handing errors especially for edges cases not included in error base class.
3. Retry mechanism could be more effective because sometimes the error could be due to a temporary network issue.  