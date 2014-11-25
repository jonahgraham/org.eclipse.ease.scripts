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

// load resources module
loadModule('/System/Resources');

// get project instance
var project = getProject("Sample Project");

if (!project.exists())
	// project does not exist, create
	project = createProject("Sample Project");

// create a file within the project
var file = createFile("workspace://Sample Project/License.txt");

// write to file, we could use the file variable instead of the location, too
var fileHandle = writeLine("workspace://Sample Project/License.txt", "This program and the accompanying materials are made available under the terms of the Eclipse Public License v1.0.");

// to continue writing, use the handle, as we otherwise would override what we have just written before
writeLine(fileHandle, "It is available at http://www.eclipse.org/legal/epl-v10.html");

// open file in editor
loadModule('/System/UI');
showEditor("workspace://Sample Project/License.txt");

