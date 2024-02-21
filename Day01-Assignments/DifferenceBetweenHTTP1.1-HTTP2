Difference between HTTP/ 1.1 vs HTTP/2
 HTTP Stands for Hyper Text Transfer Protocol.

It is used in Client-Server Communication. By using HTTP , the user sends the request to the server as well with the use of HTTP,  the server responds to the user.

There are multiple implementations of HTTP. Here are the few difference between HTTP/1.1 and HTTP/2.



HTTP/1.1 

Was created in 1997.
It works on textual format.
There is head of line blocking that blocks all the requests behind it until it doesn’t get its all resources.
For getting multiple pages, it uses requests resource inlining.
It compresses data by itself.
-It transfers all request and response in plain text message form. 

-Before sending request and response, there is a TCP Connection established between client and server, after the request the connection is not lost due to the Keep-alive Header. Which is the part of the request so there is a open connection between the server and client. There is a persistent connection, which means several request and response are merged in single connection.







HTTP/2

Was created in 2015.
It works on Binary Protocol
It allows multiplexing so one TCP connection is required for multiple requests.
It uses PUSH frame by server that collects all multiple pages.
It uses HPACK for data compression.
-Was developed over SPDY Protocol.

-HTTP2, works on the binary framing layer.

-Here one TCP connection is used for multiple requests.

-It uses HPACK which is used to split data from header. It compresses the header. The server sends all the other files like CSS and JS without the request of the client using the PUSH frame.