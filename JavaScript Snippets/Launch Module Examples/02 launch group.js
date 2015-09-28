// In this example, we prepare our environment with the
// “Prepare” configuration, then launch the “Server” and
// “Client” configurations.

// load the Launch module
loadModule("/System/Launch")

// launch the Prepare configuration
prepare = launch("Prepare")
// Busy-wait until the Prepare launch has terminated
while (!prepare.isTerminated()) {
	java.lang.Thread.sleep(1)
}

// launch the server
launch("Server")
// Wait 3 seconds for the server to be ready
java.lang.Thread.sleep(3000)

// launch the client in Debug mode
launch("Client", "debug")
