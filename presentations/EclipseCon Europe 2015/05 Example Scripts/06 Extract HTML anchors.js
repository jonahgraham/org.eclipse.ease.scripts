loadModule('/System/Resources');

content = readStream(new java.net.URL("http://www.eclipse.org").openStream())

// convert to JS string
content = content + "";

// find anchor tags
anchors = content.match(/<a\s*href=".*?"\s*>/g);

for each (anchor in anchors)
	print(anchor);

