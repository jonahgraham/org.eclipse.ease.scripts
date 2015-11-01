/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:	Christian Pontesegger - initial API and implementation
 * description: 	Stop timer and display elapsed time
 * name:			Task/stop
 * toolbar:			Project Explorer
 * image:			http://tdiv.free.fr/stop.png
 *******************************************************************************/

loadModule('/System/UI');
loadModule('/System/Scripting');

start = getSharedObject("Task/start");

if (start != null) {
	stop = java.lang.System.currentTimeMillis();
	showInfoDialog("Your task took " + ((stop - start)/1000) + " seconds");
	setSharedObject("Task/start", null, true, true);

} else 
	showInfoDialog("No active task available");
