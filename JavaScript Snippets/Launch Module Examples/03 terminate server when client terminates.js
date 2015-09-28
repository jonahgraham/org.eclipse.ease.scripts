// Example 1 and 2 are a promising start, but do not
// yet add any new functionality to Eclipse. So what
// do you do if you want the server to stop automatically
// when you finish debugging your client. Well that is
// really easy now, just monitor the client launch and
// terminate the server.

// load the Launch module
loadModule("/System/Launch")

// launch the Prepare configuration
prepare = launch("Prepare")
// Busy-wait until the Prepare launch has terminated
while (!prepare.isTerminated()) {
	java.lang.Thread.sleep(1)
}

// launch the Server, but keep a handle of the ILaunch
server = launch("Server")
// Wait 3 seconds for the server to be ready
java.lang.Thread.sleep(3000)

// launch the Client
client = launch("Client", "debug")
// Busy-wait until the Client debug session launch has terminated
while (!client.isTerminated()) {
	java.lang.Thread.sleep(1)
}
// terminate the server
server.terminate()
