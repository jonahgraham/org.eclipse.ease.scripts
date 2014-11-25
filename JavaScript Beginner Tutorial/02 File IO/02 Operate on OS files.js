/*******************************************************************************
 * Copyright (c) 2014 Christian Pontesegger and others. All rights reserved.
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors: Christian Pontesegger - initial API and implementation
 ******************************************************************************/

// change location according to your system
const
FILE_LOCATION = "/tmp/testfile.txt";
// const FILE_LOCATION = "C:\\temp\\testfile.txt";

// use plain java API
var file = new java.io.File(FILE_LOCATION);
var writer = new java.io.PrintWriter(file);
writer.println("This is a sample file");
writer.close();

// now append using resources module

// load resources module
loadModule('/System/Resources');

// open in APPEND mode, APPEND is set when loading Resources module
var handle = openFile(FILE_LOCATION, APPEND);
writeFile(handle, "2nd line");
