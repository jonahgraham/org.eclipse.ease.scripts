/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Christian Pontesegger - initial API and implementation
 *******************************************************************************/

function sleep(milliSeconds) {
	end = java.lang.System.currentTimeMillis() + milliSeconds;
	while (java.lang.System.currentTimeMillis() < end)
		;
}

// loop over a test parameter
for ( var cycle = 1; cycle < 10; cycle++) {
	startTest("cycle " + cycle, "valid test");
	sleep(500);
	endTest();
}

