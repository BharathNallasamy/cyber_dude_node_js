const fileSys = require("fs");
const internsJSON = require("./data/interns.json");

// console.log(internsJSON);

var data = internsJSON.find((data) => {
  return data.id === 1;
});

// Create a file called person.txt which should hold the following information!
// 1. create a folder called "Interns".
// 2. Easki => esaki.txt
// 3. Hello, My name is Esaki. I'm Learning NodeJS in Official Documentation.
fileSys.mkdir("interns", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

internsJSON.forEach((val) => {
  const internsName = val.name.toLowerCase().replace(/\s+/g, "_");
  const filePath = `interns/${internsName}.txt`;
  const fileContent = `Hello, My name is ${val.name}. I'm Learning NodeJS in Official Documentation.`;

  fileSys.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`File created: ${filePath}`);
    }
  });
});

// console.log(data);

// fileSys.mkdir("newFolder", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fileSys.writeFile(
//   "newFolder/firstFileUsingNodeJs.txt",
//   `First File using Node JS => ( ${new Date()} )`,
//   (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("File returned Success!");
//   }
// );
