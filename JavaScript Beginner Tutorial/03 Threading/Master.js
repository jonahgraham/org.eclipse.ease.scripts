/*******************************************************************************
 * Copyright (c) 2014 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Christian Pontesegger - initial API and implementation
 *******************************************************************************/

loadModule('/System/Scripting');

print("Master start")
print("==============================================");

// create a shared object to be used in spawned threads
file = new java.io.File("/root");
setSharedObject("file", file);

// spawn 2 engines
engineA = fork("Thread A.js");
engineB = fork("Thread B.js", "pass, some, delimited, script arguments");

// wait for engines to be terminated
join(engineA);
join(engineB);

print("==============================================");
print("Master done")