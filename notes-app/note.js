const fs = require("fs");
const chalk = require("chalk");
const getNote = () => {
  return "Note...";
};

const addNote = (title, body) => {
  const notes = loadNote();
  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("new note added"));
  } else {
    console.log(chalk.red.inverse("note title is taken"));
  }
};

// Remove note
const removeNote = title => {
  const notes = loadNote();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("no n ote found"));
  }
};

// List notes
const listNotes = () => {
  const notes = loadNote();
  console.log(chalk.green.inverse("your note "));
  notes.forEach(note => {
    console.log(note.title);
  });
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNote = () => {
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
  removeNote: removeNote,
  listNotes,
  listNotes
};
