// In this first example, we simply launch the Client in Debug mode.

// load the Launch module, this populates the namespace with all the methods defined in the Launch module.
loadModule("/System/Launch")

// launch the existing launch configuration “Client” in debug mode.
launch("Client", "debug")
