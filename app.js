const add = require('./utilis.js');
const getNotes=require('./nodes.js');

//const name='Bilal';

const sum=add(4,-2);
console.log(sum);

const NotesPrint=getNotes();
console.log(NotesPrint);


// fs.writeFileSync('notes.txt', 'My name is Andrew.')
//fs.appendFileSync('notes.txt', ' I live in Philadelphia.')
