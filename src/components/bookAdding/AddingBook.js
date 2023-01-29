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




    <div className='h-[100vh] font-medium md:mt-[3rem] lg:mt-[0rem] mt-[3rem] '>
      
      <form   onSubmit={submitHandler} className={`bg-[#282f8c5a] rounded-lg flex flex-col  justify-center align-middle shadow-lg  lg:px-[10rem] p-[10px] mx-5 md:mx-[2rem] lg:mx-[20rem] lg:mt-[10rem]  py-[4rem] gap-3 md:px-5`}>
{/* inputs  */}
{/* title */}
<input

className=' pl-3  py-2 cursor-pointer  border rounded-sm shadow-lg'


onChange={(e)=>setTitle(e.target.value)}
value={title}

type="Name" placeholder='Book Title' required/>
{/* author */}
<input
className=' pl-3 py-2 my-3 cursor-pointer  border rounded-sm shadow-lg'

onChange={(e)=>setAuthor(e.target.value)}
value={author}
type="" placeholder='Author' />
<input

className='pl-3 rounded-sm py-2 shadow-lg'
onChange={(e)=>setGener(e.target.value)}
value={gener} 

type="" placeholder='Select genres ' />
{/* select genres */}

<input
className='pl-3 w-[full] py-2 my-3 cursor-pointer border rounded-sm shadow-lg'
onChange={(e)=>setPrice(e.target.value)}
value={Price}
type="number" placeholder='Price' />
{/* discriptions */}
<textarea 
className='pl-3 py-2 my-3 cursor-pointer border shadow-lg'

onChange={(e)=>setDescribe(e.target.value)}
value={describe}

name="" placeholder='Description of the book' id="" cols="20" rows="5"></textarea>


<div className=' flex gap-5 self-center'>
<button className='px-[1rem] cursor-pointer mt-10 py-[1rem] text-[#ffff] bg-slate-800 w-[9rem]  text-center flex items-center justify-center align-middle self-center text-xl rounded-md hover:shadow-md hover:bg-slate-700 transition-all duration-300 ease-in-out shadow-lg ' >
    Add book
</button>

</div>






      </form>
    </div>
  )
}

export default AddingBook
