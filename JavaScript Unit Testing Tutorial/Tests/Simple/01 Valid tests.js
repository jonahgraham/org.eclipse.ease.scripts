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

// starts a simple test
startTest("empty", "an empty test case");
// ends a test
endTest();

// start another test
startTest("no test code", "a test containing no assertions");
print("Hi from valid test");
endTest();

// third test
startTest("valid assertions", "a test containing valid assertions");
// check
assertTrue(true);
endTest();

// code outside of a testcase
print('"' + getTestFile() + '" completed');
