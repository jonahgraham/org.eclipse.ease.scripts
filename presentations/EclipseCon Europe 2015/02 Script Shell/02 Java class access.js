/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:	Christian Pontesegger - initial API and implementation
 * description: 	Access java classes
 *******************************************************************************/

// access classes from JRE
new java.io.File("/");
root = new java.io.File("/");
root.exists();

// access classes from eclipse
org.eclipse.core.runtime.Platform;
org.eclipse.core.runtime.Platform.getInstallLocation().getURL();