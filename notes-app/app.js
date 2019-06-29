const yargs = require("yargs");

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
  handler: function(argv) {
    console.log("title: ", argv.title);
    console.log("body: ", argv.body);
  }
});

console.log(yargs.argv);
