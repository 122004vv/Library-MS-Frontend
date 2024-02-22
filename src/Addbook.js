import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Addbook() {
    const [bookn,setBname]=useState('')
    const [author,setAuthor]=useState('')
    const [pdate, setPdate]=useState('')
    const [genre,setGenre]=useState('')
    const [rating,setRating]=useState('')
    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8080/create',{bookn,author,pdate,genre,rating})
        .then(res=>{
            console.log(res);
            navigate('/allbooks');
        }).catch(err=>console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h3>ADD AN BOOK</h3>
                <div className='mb-2'>
                    <label htmlFor="">Book Title*</label>
                    <input type="text" required placeholder='Book Title' className='form-control' onChange={e=>setBname(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Author Name*</label>
                    <input type="text" required placeholder='Author Name ( in CAPITAL )' className='form-control' onChange={e=>setAuthor(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Publish Date*</label>
                    <input type="date" required placeholder='Publish Date' className='form-control' onChange={e=>setPdate(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Genre*</label>
                    <input type="text" required min="21" placeholder='Genre' className='form-control' onChange={e=>setGenre(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Rating*</label>
                    <input type="text" required  placeholder='Rating' className='form-control' onChange={e=>setRating(e.target.value)}/>
                </div>
                <button className='btn btn-success' onClick={handleSubmit}>Add book</button>
            </form>
        </div>
    </div>
  )
}

export default Addbook