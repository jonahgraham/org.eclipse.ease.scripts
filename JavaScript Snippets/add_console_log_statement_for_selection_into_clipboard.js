/*******************************************************************************
 * name : Add console.log Statement For Selection Into Clipboard with EASE
 * popup : enableFor(java.lang.Object)
 *
 * Copyright (c) 2014 Paul D. Fernhout
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributed by: Paul D. Fernhout
 * Purpose: Puts a console.log statement into the clipboard derived from the currently selected text
 * Installation: Put this script to a monitored location (see Preferences/Scripting/Script Location) and it will be available in any context menu.
 * Usage: Select a variable you would like to log in your JavaScript code and then
 * pick "Add console.log Statement For Selection Into Clipboard with EASE" from the context menu.
 *******************************************************************************/

// This defines getSelection and setClipboard
loadModule('/System/UI');

var selection = getSelection();
// TODO: This next line is false for some reason with either TextSelection or ITextSelection, so using kludge as temporary work around
// var isTextSelection = (selection instanceof org.eclipse.jface.text.TextSelection);
var isTextSelection = "" + selection.getClass() === "class org.eclipse.jface.text.TextSelection";
if (isTextSelection) {
    selectedText = selection.getText();
    var consoleLogStatement = 'console.log("' + selectedText + '", ' + selectedText + ');\n';
    setClipboard(consoleLogStatement);
    print("Set clipboard with: " + consoleLogStatement);
} else {
    print("Clipboard selection class was not of expected type; was: '" + selection.getClass() + "'");
}