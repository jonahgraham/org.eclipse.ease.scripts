var libraryURL = "http://central.maven.org/maven2/com/github/lalyos/jfiglet/0.0.7/jfiglet-0.0.7.jar";
var libraryLocation = "project://03 External libraries/libs/jfiglet-0.0.7.jar";

include("Helpers.js");

// verify that external library is available
loadModule('/System/Resources');
if (!fileExists(libraryLocation)) {
	downloadLibrary(libraryURL, libraryLocation);

	if (!fileExists(libraryLocation)) {
		printError("jfiglet library not available, please download from "
				+ libraryURL);
		exit();
	}
}

// load external library
loadJar(libraryLocation);
// load directly from the web
// loadJar(libraryURL);

// draw ASCII art
com.github.lalyos.jfiglet.FigletFont
		.convertOneLine("I      love      scripting");