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
		process = runProcess("ping", [ "-c 1", address ]);
		while (!process.isFinished())
			;

		// parse output
		output = process.getOutput();
		start = output.indexOf("time=");
		if (start != -1) {
			end = output.indexOf(" ms", start);
			if (end != -1) {
				time = parseFloat(output.substring(start + 5, end));
				plotPoint(count, time);
			}
		}
	}
}
