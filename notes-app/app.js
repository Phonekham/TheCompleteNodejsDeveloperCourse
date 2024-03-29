const yargs = require("yargs");
const notes = require("./note");

// create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove commend
yargs.command({
  command: "remove",
  describe: "remove a  note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "list your  note",
  handler() {
    notes.listNotes();
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "read a  note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

console.log(yargs.argv);
