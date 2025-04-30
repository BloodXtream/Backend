const { isUtf8 } = require("buffer");
const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

// use to create file and then write it if the file is not existion in the direciotey

const writeFile = fs.writeFileSync(
  filePath,
  "this is new file with intial data",
  "utf8"
);

console.log(writeFile);

// this is use to read the existing file

const readFile = fs.readFileSync(filePath, "utf8");
console.log(readFile.toString());
console.log(readFile);

// this is use to add something in the file  Append ffile

const appendFile = fs.appendFileSync(
  filePath,
  "\n this fiel is updateed",
  "utf8"
);

// this is use to delete any file using fs.unlink()

const dltFile = fs.unlinkSync(filePath);
console.log(dltFile);

// this is use to rename thie fiel fs.renameSync()
const newName = "testUpdated.txt";
const newFile = path.join(__dirname, newName);
const renameFile = fs.renameSync(filePath, newFile);
console.log(renameFile);
