/*******************************************************************************
 * Copyright (c) 2015 Jonah Graham and others. All rights reserved.
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors: Jonah Graham - initial API and implementation
 * 
 * name			: Launch Module Example 1
 * description	: In this first example, we simply launch the Client in Debug mode.
 ******************************************************************************/

// load the Launch module, this populates the namespace with all the methods defined in the Launch module.
loadModule("/System/Launch")

// launch the existing launch configuration “Client” in debug mode.
launch("Client", "debug")
