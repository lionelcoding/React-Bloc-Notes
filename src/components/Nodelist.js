const NotesList = ({
    notes,
    handleAddNote,
    handleDeleteNote,
}) => {
    return ( 
        <div className = 'notes-list' > {
            notes.map((note) => ( 
                <h1 
                title ={note.title}
                content ={note.content}/>

            ))
        } 
      

        </div>
    );
};

export default NotesList;