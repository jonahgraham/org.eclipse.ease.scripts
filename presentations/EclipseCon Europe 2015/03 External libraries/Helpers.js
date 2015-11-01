/**
 * Download a binary file from the web.
 * @param link URI to download from
 * @param targetLocation workspace location to store the file to
 */
function downloadLibrary(link, targetLocation) {
	target = getFile(targetLocation, false);
	if (!target.exists()) {
		input = new java.net.URL(link).openStream();
		target.create(input, true, null);
		input.close();

	} else
		printError("target library '" + targetLocation + "' already exists.");
}