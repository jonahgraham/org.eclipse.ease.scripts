/*******************************************************************************
 * Copyright (c) 2015 Jonah Graham and others. All rights reserved.
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors: Jonah Graham - initial API and implementation
 * 
 * name			: Launch Module Example 2
 * description	: In this example, we prepare our environment with the Prepare” 
 *                configuration, then launch the “Server” and “Client” configurations.
 ******************************************************************************/

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
