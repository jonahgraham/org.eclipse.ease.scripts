/*******************************************************************************
 * Copyright (c) 2014 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Christian Pontesegger - initial API and implementation
 *******************************************************************************/

// change location according to your system
const
FILE_LOCATION = "/tmp/testfile.txt";
// const FILE_LOCATION = "C:\\temp\\testfile.txt";

// create a simple XML document
var memento = org.eclipse.ui.XMLMemento.createWriteRoot("root");
var person = memento.createChild("person");
person.createChild("name").putTextData("Christian");
person.createChild("profession").putTextData("Script guru");
person.createChild("age").putInteger("guess", 34);

// write to disk
loadModule('/System/Resources');
writeFile(FILE_LOCATION, memento);

// create a shortcut for XMLMemento
var XMLMemento = org.eclipse.ui.XMLMemento;

// re-read XML
var memento = XMLMemento.createReadRoot(new java.io.FileReader(FILE_LOCATION));
print("Name: " + memento.getChild("person").getChild("name").getTextData());
