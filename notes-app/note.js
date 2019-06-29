const fs = require("fs");
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
    console.log("new note added");
  } else {
    console.log("note title is taken");
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
  addNote: addNote
};
