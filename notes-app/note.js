const fs = require("fs");
const chalk = require("chalk");
const getNote = function() {
  return "Note...";
};

const addNote = function(title, body) {
  const notes = loadNote();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("new note added"));
  } else {
    console.log(chalk.green.inverse("note title is taken"));
  }
};

// Remove note
const removeNote = function(title) {
  const notes = loadNote();
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("no n ote found"));
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNote = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote
};
