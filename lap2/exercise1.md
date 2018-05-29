###### Question 1. Why do we want some times to use setImmediate instead of using setTimeOut:

+ (setTimeout,0) will be slower because it will check the timer at least once before executing. At times it can be twice as slow.
Source: https://stackoverflow.com/questions/24117267/nodejs-settimeoutfn-0-vs-setimmediatefn

###### Question 2. Explain the difference between process.nextTick and setImmediate
+ Use setImmediate if you want to queue the function behind whatever I/O event callbacks that are already in the event queue. 
+ Use process.nextTick to effectively queue the function at the head of the event queue (aka in the priority queue) so that it executes immediately after the current function completes.
###### Question 3. Name 10 modules that Node provides by defaults:
    1. http: to use http server
    2. https: to use https server
    3. fs: provides an API for interacting with the file system.
    4. crypto: prvides cryptopgrahic functionality
    5. http/2: provies an implemenation of the HTTP/2 protocol.
    6. stream: adstract interface for working with streaming data
    7. path: provides utilities for working with files and directory paths
    8. os: provides a number of operating system-related unility methods
    9. console: provides a simple debugging console.
    10. querystring: provides utilities for parsing and formatting URL query strings.
    
    
