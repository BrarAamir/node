const yargs = require('yargs');
const note = require('./notes.js');
const titleOption = {
    describe:'Title of Note',
    demand:true,
    alias:'t'
   };
const argv = yargs
            .command('add','add a new note',{
                title:titleOption,
                body:{
                    describe:'Body of Note',
                    demand:true,
                    alias:'b'  
                }
            })
            .command('list','List All Notes')
            .command('read','Read a note',{
                title:titleOption
            })
            .command('remove','Remove a note',{
                title:titleOption
            })
            .help()
            .argv;
var cmd = argv._[0];
if(cmd === "add"){
 var n = note.addNote(argv.title,argv.body);
 if(n){
 console.log('Note Created');
 note.consoleOutput(n);
 }else{
console.log("Sorry Note Title taken Already");
 }
}else if(cmd === "list")
{
 var getAllNote = note.getAll();
 console.log(`Total Lenth ${getAllNote.length} notes`);
 getAllNote.forEach((notedata) => {
     note.consoleOutput(notedata);
 });
}else if(cmd === "read"){
   var getNote = note.getNote(argv.title);
   if(getNote)
   {
    console.log('Note Found');
    note.consoleOutput(getNote);
   }else{
    console.log("Note Not found");
   }
}else if(cmd === "remove")
{
   var noteRemove =  note.removeNote(argv.title);
   var message = noteRemove ? 'Note Was Remove' : 'Note Not Found';
   console.log(message);
}else{
console.log("no input");
} 