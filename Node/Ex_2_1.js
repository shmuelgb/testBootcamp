const fs = require("fs");

fs.writeFileSync("test.txt", "first commit");

fs.copyFileSync("test.txt", "copyTest.txt");

fs.rename("test.txt", "changedTest.txt", (err) => {
  if (err) console.log(err);
});

fs.readdir("./", (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});

fs.readFile("changedTest.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
