import logo from './logo.svg';
import './App.css';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import NotesList from './components/Nodelist';
import { useState, useEffect } from 'react';

function App() {
  const getNotes = () =>{
    const loadData = JSON.parse(localStorage.getItem("bloc-noteData"))
    return loadData? loadData : []
  }

  const [notes, setNote] = useState(getNotes([]));
  const [title, setTitle]=useState();
  const [content, setContent]=useState()

  const handleChangeTitle = (e)=>{
    setTitle(e.target.value)
  }
  const saveNotes = (addedNotes) => {
    const toSave = JSON.stringify(addedNotes)
    localStorage.setItem('bloc-noteData', toSave);
    setNote(getNotes())
  }
  useEffect(() => {
    console.log(localStorage.getItem('bloc-noteData'))
  }, [])
  
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    notes.unshift({title: title, content: content});
    saveNotes(notes);
    setTitle("");
    setContent("");
    getNotes()
  }
  
  const handleDelete = (event) => {
    event.preventDefault();
    notes.splice(0, 1);
    saveNotes(notes);
    console.log(localStorage.getItem('bloc-noteData'));
  }
 


    const changeNote = (e) => {
      setNote(e.target.value);
    };
  return (
    <>
    <div className="App">
      <NoteDisplay note={notes} content={content} title={title}/>
      <MarkdownInput 
      title={title}
      content ={content}
      handleChangeTitle={handleChangeTitle}
      handleChangeContent={handleChangeContent} 
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}/>
    </div>
    </>
  );
}
<NotesList/>

export default App;
