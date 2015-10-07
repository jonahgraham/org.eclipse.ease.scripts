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

function sleep(time) {
	start = java.lang.System.currentTimeMillis();
	while (start + time > java.lang.System.currentTimeMillis())
		;
}

for each (arg in argv)
	print("Argument: " + arg);

loadModule('/System/Scripting');

file = getSharedObject("file");
print("Thread B: " + file);

for (var i = 1; i< 10; i++) {
	print("Thread B, " + i);
	sleep(10);
}