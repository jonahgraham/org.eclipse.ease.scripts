/*******************************************************************************
 * Copyright (c) 2014 Christian Pontesegger and others. All rights reserved.
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors: Christian Pontesegger - initial API and implementation
 * 
 * name			: Add script location
 * popup		: enableFor(org.eclipse.core.resources.IContainer)
 * description	: Adds the selected folder to monitored script locations 
 ******************************************************************************/

loadModule('/System/UI');
var selection = getSelection();
if (selection instanceof org.eclipse.jface.viewers.IStructuredSelection) {
	// get location, due to context menu binding we know this is an IContainer
	var container = selection.getFirstElement();
	var location = "workspace:/" + container.getFullPath();
	var node = location.replace(/\//g, "|");

	loadModule('/System/Platform');
	// verify that location is not already registered
	var storedLocation = readPreferences("org.eclipse.ease.ui/" + node, "location");
	if (storedLocation == "") {
		// add location preferences
		writePreferences("org.eclipse.ease.ui/" + node, "location", location);
		writePreferences("org.eclipse.ease.ui/" + node, "default", false);
		writePreferences("org.eclipse.ease.ui/" + node, "recursive", true);
		
		// trigger update
		var repositoryService = getService(org.eclipse.ease.ui.scripts.repository.IRepositoryService);
		repositoryService.updateLocations();
		
	}  else
		// location already registered
		showInfoDialog("Location is already registered");
} 