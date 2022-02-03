import React from 'react';


const Textarea = () => {
    console.log()
    return (
        <div>
            <form>  
            <input
        type="text"
        placeholder="Votre Note"
        onChange={(e) => setAddInput(e.target.value)}
            />

  
            </form>
        </div>
    );
};

export default Textarea;