// Instructions
// Practice makes perfect.
// Lets create crud operations to manage users in a json file.
// Create a CRUD application and store them in a users.json file
// that you are able to do the following operations:
// 1. Create a user
// 2. Read a user
// 3. Update a user
// 4. Delete a user
// Each user needs at least the following:
// 1. Id
// 2. Name
// 3. Email

const fs = require("fs");
const yargs = require("yargs");
const uniqid = require("uniqid");
const { get } = require("https");
const { argv } = require("process");

const getUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const saveUsers = (users) => {
  const usersJson = JSON.stringify(users);
  fs.writeFileSync("users.json", usersJson);
};

// Add==>
const add = (name, email) => {
  const users = getUsers();
  const newUser = {
    id: uniqid(),
    name,
    email,
  };
  users.push(newUser);
  saveUsers(users);
  console.log("new user added:", newUser);
};
// add("sam", "shmuelgb.315@gmail.com");

//Read==>
const read = (id) => {
  const users = getUsers();
  const user = users.find((user) => user.id === id);
  console.log("found:", user);
  return user;
};
// read("2kv72fp4ky8mw86x");

//Update==>
const update = (id, name, email) => {
  const users = getUsers();
  const newUsers = users.map((user) => {
    console.log("user:", user);
    let updatedUser = user;
    if (user.id === id) {
      console.log("!");
      updatedUser = {
        id,
        name: name !== null ? name : user.name,
        email: email !== null ? email : user.email,
      };
    }
    console.log("updated user:", updatedUser);
    return updatedUser;
  });
  console.log("newUsers:", newUsers);
  saveUsers(newUsers);
};
// update("2kv72fp4ky8mw86x", "shmuel", "s@example");

//Delete==>
const handleDelete = (id) => {
  const users = getUsers();
  const usersCopy = users.filter((user) => {
    if (user.id !== id) return user;
  });
  console.log("deleted successfully");
  saveUsers(users);
};
// handleDelete("2kv72fp4ky8mw86x");

yargs.command({
  command: "add",
  describe: "add a user",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    add(argv.name, argv.email);
  },
});

yargs.command({
  command: "read",
  describe: "read a user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    read(argv.id);
  },
});

yargs.command({
  command: "update",
  describe: "update a user",
  builder: {
    name: {
      describe: "user name",
      type: "string",
    },
    email: {
      describe: "user email",
      type: "string",
    },
  },
  handler: (argv) => {
    const name = argv.name ? argv.name : null;
    const email = argv.email ? argv.email : null;
    add(name, email);
  },
});

yargs.command({
  command: "delete",
  describe: "delete a user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    handleDelete(argv.id);
  },
});

yargs.parse();
