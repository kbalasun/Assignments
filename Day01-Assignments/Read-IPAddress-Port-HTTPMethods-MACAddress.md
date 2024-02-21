 Address

An IP address is a unique numerical label assigned to each device connected to a computer network, such as the internet. It acts as a virtual address that allows devices to communicate and identify each other on the network. There are two main versions of IP addresses:

IPv4: The older version, consisting of four sets of numbers between 0 and 255, separated by periods (e.g., 192.168.1.1).
IPv6: The newer version, with a more complex format using hexadecimal numbers and colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
Port

A port is a virtual communication channel associated with an IP address. It allows different applications or services running on the same device to receive and send data independently. Imagine an IP address as a building with multiple doors (ports), each leading to a specific apartment (application or service). Common port numbers include:

80: HTTP (web traffic)
443: HTTPS (secure HTTP)
21: FTP (file transfer)
25: SMTP (email)
HTTP Methods

HTTP methods are specific commands sent within an HTTP request to instruct the server on how to handle the request. These methods define the desired action on the server-side, such as retrieving data, creating new resources, or updating existing ones. Some common HTTP methods include:

GET: Retrieves data from the server, often used for fetching web pages or resources.
POST: Submits data to the server, typically used for submitting forms or creating new data.
PUT: Updates existing data on the server.
DELETE: Removes data from the server.
PATCH: Applies partial modifications to data on the server.
MAC Address

A MAC address (Media Access Control address) is a unique hardware identifier assigned to each network interface card (NIC) in a device. It’s used at the data link layer of the OSI model to ensure proper delivery of data frames within a local network segment. Unlike IP addresses, which can be dynamic and change, MAC addresses are typically burned into the hardware and remain static.

Relationships between these concepts:

IP address and port: Together, they uniquely identify a specific application or service running on a device on the network.
IP address and MAC address: An IP address is assigned to a logical network interface, while a MAC address is assigned to the physical NIC hardware. A device can have multiple MAC addresses but only one primary IP address for each network interface.
HTTP methods and ports: Specific HTTP methods are often associated with specific ports. For example, GET and POST requests for web pages typically use port 80 (HTTP) or 443 (HTTPS).


