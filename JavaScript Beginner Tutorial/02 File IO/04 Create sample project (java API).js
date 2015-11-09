/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:	Christian Pontesegger - initial API and implementation
 * description: 	Script to create a sample project, not meant for productive use
 *******************************************************************************/

var projectName = "EclipseCon 2015 Sample project";
var files = [
             ["Disclaimer.txt", "This is the disclaimer"], 
             ["HowTo.txt", "TODO: write HowTo Content"], 
             ["License.txt", "This project is licensed under the EPL."]
            ];

print("Creating sample project");

// @type org.eclipse.core.resources.IWorkspaceRoot
wsRoot = org.eclipse.core.resources.ResourcesPlugin.getWorkspace().getRoot();

// @type org.eclipse.core.resources.IProject
newProject = wsRoot.getProject(projectName);

// create project
if (!newProject.exists()) {
	print("\tcreating project");
	newProject.create(null);
	newProject.open(null);
} else
	print("\tproject already exists");
	

// now create files
for each (fileDescription in files) {
	
	// @type org.eclipse.core.resources.IFile
	file = newProject.getFile(fileDescription[0]);
	if (!file.exists()) {
		print("\tcreating file " + fileDescription[0]);
		fileInput = new java.io.ByteArrayInputStream(new java.lang.String(fileDescription[1]).getBytes());
		file.create(fileInput, true, null);
	} else
		print("\tfile " + fileDescription[0] + " already exists");
}

