import React, { useState } from 'react'
import { useFirestore } from '../hooks/useFirestore';

const AddingBook = ({uid}) => {

     const [title,setTitle]=useState('');
     const [author,setAuthor]=useState('');
     const [gener,setGener]=useState('')
     const [Price,setPrice]=useState();
     const [describe,setDescribe]=useState('');
const {addDoc}=useFirestore('transactions');

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

// dsklfja;
     }


  return (




    <div className='h-[100vh] font-medium'>
      
      <form   onSubmit={submitHandler} className={`bg-[#282f8c5a] rounded-lg flex flex-col  justify-center align-middle shadow-lg px-[10rem] p-[10px] mx-5 lg:mx-[20rem] lg:mt-[10rem]  py-[4rem] `}>
{/* inputs  */}
{/* title */}
<input

className='  py-2 cursor-pointer  border rounded-sm shadow-lg'


onChange={(e)=>setTitle(e.target.value)}
value={title}

type="Name" placeholder='Book Title' required/>
{/* author */}
<input
className=' py-2 my-3 cursor-pointer  border rounded-sm shadow-lg'

onChange={(e)=>setAuthor(e.target.value)}
value={author}
type="" placeholder='Author' />
<input

className='rounded-sm py-2 shadow-lg'
onChange={(e)=>setGener(e.target.value)}
value={gener} 

type="" placeholder='Select genres ' />
{/* select genres */}

<input
className=' w-[full] py-2 my-3 cursor-pointer border rounded-sm shadow-lg'
onChange={(e)=>setPrice(e.target.value)}
value={Price}
type="number" placeholder='Price' />
{/* discriptions */}
<textarea 
className=' py-2 my-3 cursor-pointer border shadow-lg'

onChange={(e)=>setDescribe(e.target.value)}
value={describe}

name="" placeholder='Description of the book' id="" cols="20" rows="5"></textarea>


<div className='flex gap-5'>
<button className='px-[1rem] cursor-pointer mt-10 py-[1rem] text-[#ffff] bg-slate-800 w-[9rem]  text-center flex items-center justify-center align-middle self-center text-xl rounded-md hover:shadow-md hover:bg-slate-700 transition-all duration-300 ease-in-out shadow-lg ' >
    Add book
</button>

</div>






      </form>
    </div>
  )
}

export default AddingBook
