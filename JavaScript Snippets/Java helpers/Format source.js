/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others. All rights reserved.
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors: Christian Pontesegger - initial API and implementation
 * 
 * name : Format source file description : Applies the current Java code
 * formatter settings to a given source file.
 ******************************************************************************/

function formatUnitSourceCode(file) {
	unit = org.eclipse.jdt.core.JavaCore.create(file);

	unit.becomeWorkingCopy(null);

	formatter = org.eclipse.jdt.core.ToolFactory.createCodeFormatter(null);
	range = unit.getSourceRange();
	formatEdit = formatter
			.format(
					org.eclipse.jdt.core.formatter.CodeFormatter.K_COMPILATION_UNIT
							| org.eclipse.jdt.core.formatter.CodeFormatter.F_INCLUDE_COMMENTS,
					unit.getSource(), 0, unit.getSource().length(), 0, null);
	if (formatEdit.hasChildren()) {
		unit.applyTextEdit(formatEdit, null);
		unit.reconcile(org.eclipse.jdt.core.dom.AST.JLS4, false, null, null);
	}

	unit.commitWorkingCopy(true, null);
}
