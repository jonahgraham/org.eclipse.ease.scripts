/*******************************************************************************
 * Copyright (c) 2014 Christian Pontesegger and others. All rights reserved.
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors         : Christian Pontesegger - initial API and implementation
 * name                 : Explore from here
 * image                : platform:/plugin/org.eclipse.ease.ui/icons/eobj16/folder.png
 * toolbar              : Project Explorer
 * popup                : enableFor(org.eclipse.core.resources.IResource)
 * script-type          : JavaScript
 * script-engine        : !org.eclipse.ease.javascript.nashorn
 * description          : Start a file browser using current selection.
 ******************************************************************************/

loadModule('/System/Platform');
loadModule('/System/UI');

var selection = getSelection();
if (selection instanceof org.eclipse.jface.viewers.IStructuredSelection)
	selection = selection.getFirstElement();

if (!(selection instanceof org.eclipse.core.resources.IResource))
	selection = adapt(selection, org.eclipse.core.resources.IResource)

if (selection instanceof org.eclipse.core.resources.IFile)
	selection = selection.getParent();

if (selection instanceof org.eclipse.core.resources.IContainer)
	runProcess("/usr/bin/krusader", [ "--left", getSystemProperty("user.home"), "--right", selection.getRawLocation() ]);
	//        runProcess("explorer.exe", [ selection.getRawLocation() ]);