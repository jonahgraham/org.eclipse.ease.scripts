var files = [
             ["Disclaimer.txt", "This is the disclaimer"], 
             ["HowTo.txt", "TODO: write HowTo Content"], 
             ["License.txt", "This project is licensed under the EPL."]
            ];


print("Creating sample project");

loadModule('/System/Resources');
loadModule('/System/UI');

// create project
projectName = showInputDialog("Please provide the name of the project to create", "EclipseCon 2015 Sample project", "Create Project");
if (projectName != null) {
	createProject(projectName);

	// now create files
	for each (fileDescription in files)
		writeFile("workspace://" + projectName + "/" + fileDescription[0], fileDescription[1]);
}

