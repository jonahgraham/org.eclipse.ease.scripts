/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:	Christian Pontesegger - initial API and implementation
 *******************************************************************************/
loadModule('/System/Resources');

content = readStream(new java.net.URL("http://www.eclipse.org").openStream())

// convert to JS string
content = content + "";

// find anchor tags
anchors = content.match(/<a\s*href=".*?"\s*>/g);

for each (anchor in anchors)
	print(anchor);

