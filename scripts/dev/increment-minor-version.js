const fs = require("fs");

// Load the sfdx-project.json file
const project = require("../../sfdx-project.json");

// Locate the "RevCI" packageDirectory from the packageDirectories array
const packageDirectory = project.packageDirectories.find(
  (packageDirectory) => packageDirectory.package === "MetaDeploy1"
);

const versionArray = packageDirectory.versionNumber.split(".");
const [major, minor, patch, next] = versionArray;

const newMinor = parseInt(minor) + 1;

// Increment the minor version number
packageDirectory.versionNumber = `${major}.${newMinor}.${patch}.${next}`;

// Update the version name
packageDirectory.versionName = `Version ${major}.${newMinor}`;

// Write the updated project file
fs.writeFile("./sfdx-project.json", JSON.stringify(project, null, 2), (err) => {
  if (err) {
    process.exitCode = 1;
  } else {
    console.log(`Updated the minor version number to ${major}.${newMinor}`);
    process.exitCode = 0;
  }
});
