//CRUD
const { log, error } = require("console");
const FS = require("fs");
// 1] async
// 2] synchronous

// FS.readFile("./ex.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log("There is an error happening in path");
//   } else {
//     console.log(data);
//   }
// });

// FS.writeFileSync("./demo.txt", "THIS IS CREATED BY NODE JS");
// FS.writeFileSync("./demo.txt", "<h1> HELLO WORLD </h1>", "utf8");

// FS.writeFileSync("./demo.txt", "Pratice Node JS", (err) => {
//   if (arr) {
//     console.log(err);
//   }
// });

// updating or append files

// FS.appendFileSync("./demo.txt", " Pratice React JS");

// FS.appendFile("./demo.txt", "<p>Jspiders</p>", (error) => {
//   if (error) console.log(error);
// });

// Delete

// FS.unlinkSync     // command to delete files

// FS.unlinkSync("./demo.txt");

// FS.unlink("./demo.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("FIle deleted successfully");
//   }
// });

// Renames Files

// FS.renameSync("./demo.html", "./index.html");

// FS.rename("./ex.txt", "./msg.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file name changed successfully");
//   }
// });

// deep copy ----------------------------------------------------------------

// FS.copyFile("./index.html", "./main.html", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("fil copied");
//   }
// });

// create folder ----------------------------------------------------------------

// FS.mkdir("./VIrat", (error) => {
//   if (error) console.log(error);
//   else console.log("folder created");
// });

// delete folder ----------------------------------------------------------------

FS.rmdir("./VIrat", (error) => {
  if (error) console.log(error);
  else console.log("folder deleted");
});
