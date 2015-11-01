/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:	Christian Pontesegger - initial API and implementation
 * description: 	Hello World
 *******************************************************************************/

var formatter = java.text.SimpleDateFormat("yyyy-MM-dd, HH:mm:ss")
print(formatter.format(java.lang.System.currentTimeMillis()));
