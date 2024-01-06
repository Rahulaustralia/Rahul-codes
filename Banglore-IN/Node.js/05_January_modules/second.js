FS.readFile("./ex.txt", "utf8", (error, data) => {
  if (error) {
    console.log("There is an error happening in path");
  } else {
    console.log(data);
  }
});
