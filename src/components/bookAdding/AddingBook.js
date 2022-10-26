import React, { useState } from 'react'
import { useFirestore } from '../hooks/useFirestore';

const AddingBook = ({uid}) => {

     const [title,setTitle]=useState('');
     const [author,setAuthor]=useState('');
     const [gener,setGener]=useState('')
     const [Price,setPrice]=useState();
     const [describe,setDescribe]=useState('');
const {addDoc,response}=useFirestore('transactions');

     const submitHandler=(e)=>{
        e.preventDefault();
console.log(uid);

        addDoc({
          uid,
          title,author,gener,Price,describe
        })
setTitle('')
setAuthor('')
setGener('')
setPrice('')
setDescribe('')
 setAuthor('')


     }


  return (




    <div className='h-[100vh]'>
      <form  onSubmit={submitHandler} className={`bg-gray-400 flex flex-col px-10 p-[10px] mx-5 align-middle justify-center`}>

<input

className='  my-3  border'


onChange={(e)=>setTitle(e.target.value)}
value={title}

type="Name" placeholder='Book Title' required/>

<input
className='  my-3  border'

onChange={(e)=>setAuthor(e.target.value)}
value={author}
type="" placeholder='Author' />
<input
onChange={(e)=>setGener(e.target.value)}
value={gener} 

type="" placeholder='Select genres' />


<input
className='  my-3  border'
onChange={(e)=>setPrice(e.target.value)}
value={Price}
type="number" placeholder='Price' />

<textarea
className='  my-3  border'

onChange={(e)=>setDescribe(e.target.value)}
value={describe}

name="" placeholder='Description of the book' id="" cols="20" rows="5"></textarea>


<button >
    Add Book
</button>






      </form>
    </div>
  )
}

export default AddingBook
