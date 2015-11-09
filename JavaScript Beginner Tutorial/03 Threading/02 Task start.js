/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:	Christian Pontesegger - initial API and implementation
 * description: 	Start a timer
 * name:			Task/start
 * toolbar:			Project Explorer
 * image:			http://files.softicons.com/download/system-icons/crystal-project-icons-by-everaldo-coelho/png/16x16/actions/agt_start_here.png
 *******************************************************************************/

start = java.lang.System.currentTimeMillis();

loadModule('/System/Scripting');
setSharedObject("Task/start", start, true, true);

