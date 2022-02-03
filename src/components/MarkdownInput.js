import React from 'react';

const MarkdownInput = (props) => { 
const {handleSubmit, handleChangeTitle, handleChangeContent, title, content, handleDelete} = props


    return (
<section>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit} >
            <div>
              <input onChange={handleChangeTitle} className="card-title title" value={title} type="text"/>
            </div>
            <div>
              <textarea  onChange={handleChangeContent} className="card-text content" value={content} type="text"/>
            </div>
            <div>
              <ul>
              <button className='btn btn-primary' type="submit">Sauvegarder</button>

              <button className='btn btn-danger' onClick={handleDelete}>Supprimer</button>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </section>
    );
};

export default MarkdownInput;