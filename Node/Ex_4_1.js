// Instructions
// Write a calculator app that uses yargs.
// Create the following operations: (add, subtract, multiply, pow).
// Eg:
// * node calc –add 1 2 // returns 3
// * node calc –sub 9 2 // returns 7
// * node calc –mult 2 4 // returns 8
// * node calc –pow 4 // returns 16

const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "calculate add",
  builder: {
    a: {
      describe: "first arg",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "second arg",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
    console.log(argv.a + argv.b);
    return argv.a + argv.b;
  },
});

yargs.command({
  command: "sub",
  describe: "calculate subtract",
  builder: {
    a: {
      describe: "first arg",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "second arg",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
    console.log(argv.a - argv.b);
    return argv.a - argv.b;
  },
});

yargs.command({
  command: "mult",
  describe: "calculate multiply",
  builder: {
    a: {
      describe: "first arg",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "second arg",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
    console.log(argv.a * argv.b);
    return argv.a * argv.b;
  },
});

yargs.command({
  command: "pow",
  describe: "calculate pow",
  builder: {
    a: {
      describe: "first arg",
      demandOption: true,
      type: "number",
    },
    b: {
      describe: "second arg",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
    console.log(argv.a ** argv.b);
    return argv.a ** argv.b;
  },
});

yargs.parse();
// console.log(yargs.argv);
