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

print("Running tests on " + testDevice);

// loop over a test parameter
for ( var cycle = 1; cycle <= testCounter; cycle++) {
	startTest("cycle " + cycle, "valid test");
	endTest();
}

