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

// test containing assertions that fail
startTest("invalid assertions", "a test containing invalid assertions");
assertTrue(true);
assertTrue(false);
assertFalse(true);
assertFalse(false);
endTest();

// manually create a failure
startTest("failure", "test throwing a failure");
failure("test broken, stop execution here");

// an exception would also create a failure
throw new java.lang.Exception("code exception");
endTest();

startTest("never to be reached");
// not being reached as the failure above terminates test file execution
endTest();
