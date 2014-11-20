/*******************************************************************************
 * name : Comment Out Selection with EASE
 * popup : enableFor(java.lang.Object)
 *
 * Copyright (c) 2014 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributed by: Paul D. Fernhout
 * Purpose: Comments out the current selection
 * Installation: Put this script to a monitored location (see Preferences/Scripting/Script Location) and it will be available in any context menu.
 * Scripts must be allowed to run on the UI thread for this to work (see Preferences/Scripting)
 * Usage: Select some text and pick "Comment Out Selection with Ease" from the context menu.
 *******************************************************************************/

loadModule('/System/UI');

// Inspired by Java code at: http://stackoverflow.com/questions/1233102/replace-selected-code-from-eclipse-editor-thru-plugin-command
function commentOutSelection() {
    var editor = getActiveEditor(); 
    var dp = editor.getDocumentProvider(); 
    var doc = dp.getDocument(editor.getEditorInput());
    var textSel = editor.getSelectionProvider().getSelection();
    var newText = '/*' + textSel.getText() + '*/';
    doc.replace(textSel.getOffset(), textSel.getLength(), newText);
}

executeUI("commentOutSelection()");
