/*******************************************************************************
 * Copyright (c) 2015 Christian Pontesegger and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:	Christian Pontesegger - initial API and implementation
 *******************************************************************************/

loadModule('/Charting');
loadModule('/System/Platform');

var servers = ["localhost", "www.eclipse.org", "www.google.com", "www.adelaidecitycouncil.com"];

figure("Ping Statistics");
clear();
setXLabel("Ping attempt")
setYLabel("Time [ms]")

for each (address in servers) {
	series(address);
	for (var count = 1; count < 20; count++) {

		// run 'ping' command
//		process = runProcess("ping", [ "-c 1", address ]); // linux command style
		process = runProcess("ping", [ "-n",  "1", address ]); // windows command style
		while (!process.isFinished())
			;

		// parse output
		output = process.getOutput();
		start = output.indexOf("time=");
		if (start != -1) {
			end = output.indexOf("ms", start);
			if (end != -1) {
				time = parseFloat(output.substring(start + 5, end).trim());
				plotPoint(count, time);
			}
		}
	}
}
