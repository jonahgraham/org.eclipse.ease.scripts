/*******************************************************************************
 * name : Put "Hello, world!" into Clipboard with EASE
 * popup : enableFor(java.lang.Object)
 *
 * Copyright (c) 2014 Paul D. Fernhout
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributed by: Paul D. Fernhout
 * Purpose: Puts "Hello, World!" into the clipboard
 * Installation: Put this script to a monitored location (see Preferences/Scripting/Script Location) and it will be available in any context menu.
 * Usage: Pick "Put "Hello, world!" into Clipboard with EASE" from the context menu and then paste the result somewhere in your document.
 *******************************************************************************/

loadModule('/System/UI');

setClipboard("Hello, world!");
