import React, {useState} from 'react';

function CreateBooks (){

    return (
        <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <form>
            <h2>Añade tu libro preferido</h2>
            <div className="mb-2">
                <label htmlFor="">Título</label>
                <input type="text" placeholder="Título" className="form-control"
                ></input> 
            </div>
            <div className="mb-2">
                <label htmlFor="">Autor</label>
                <input type="text" placeholder="autor" className="form-control"
                ></input> 
            </div>
            <div className="mb-2">
                <label htmlFor="">Editorial</label>
                <input type="text" placeholder="editorial" className="form-control"
                ></input> 
            </div>
            <button className="btn btn-success">Enviar</button>
          </form>
        </div>
    </div>
    )
}
export default CreateBooks;