/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:	Christian Pontesegger - initial API and implementation
 *******************************************************************************/

var libraryURL = "http://central.maven.org/maven2/com/github/lalyos/jfiglet/0.0.7/jfiglet-0.0.7.jar";
var libraryLocation = "libs/jfiglet-0.0.7.jar";


/**
 * Download a binary file from the web.
 * @param link URI to download from
 * @param targetLocation workspace location to store the file to
 */
function downloadLibrary(link, targetLocation) {
	target = getFile(targetLocation, false);
	if (!target.exists()) {
		input = new java.net.URL(link).openStream();
		target.create(input, true, null);
		input.close();

	} else
		printError("target library '" + targetLocation + "' already exists.");
}

// verify that external library is available
loadModule('/System/Resources');
if (!fileExists(libraryLocation)) {
	downloadLibrary(libraryURL, libraryLocation);

	if (!fileExists(libraryLocation)) {
		printError("jfiglet library not available, please download from "
				+ libraryURL);
		exit();
	}
}

// load external library
loadJar(libraryLocation);
// load directly from the web
// loadJar(libraryURL);

// draw ASCII art
com.github.lalyos.jfiglet.FigletFont
		.convertOneLine("I      love      scripting");