const fs = require('fs');

var fetchNotes = () =>{
    try{
        var notesString = fs.readFileSync('notes.data.json');
        return JSON.parse(notesString);
      }catch(e)
      {
        return [];
      }
}

var saveNotes = (notes)=>{
    fs.writeFileSync('notes.data.json',JSON.stringify(notes));
}

var addNote = (title,body) => {
  var notes = fetchNotes();
  var note = {
      title,
      body
  }
  
  var dullicateNotes = notes.filter((note) => note.title === title);
  if (dullicateNotes.length === 0)
  {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = () =>{
    return fetchNotes();
}

var getNote = (title) =>{
    var notes = fetchNotes();
    var filterNotes = notes.filter((note)=>
    {
       return note.title === title;
    });
    return filterNotes[0];
}

var removeNote = (title) =>{
    var notes = fetchNotes();
    var filterNotes = notes.filter((note)=>note.title !== title);
    saveNotes(filterNotes);
    return notes.length !== filterNotes.length;
}

var consoleOutput = (getNote)=>{
    console.log('---');
    console.log(`Title :${getNote.title}`);
    console.log(`Body :${getNote.body}`);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    consoleOutput
}