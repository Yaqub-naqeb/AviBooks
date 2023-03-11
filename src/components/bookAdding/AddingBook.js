import React, { useState } from 'react'
import { useFirestore } from '../hooks/useFirestore';

const AddingBook = ({uid}) => {

     const [title,setTitle]=useState('');
     const [time,setTime]=useState('');
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
    <div className='h-[100vh] font-medium relative md:mt-[3rem] lg:mt-[0rem] mt-[3rem] '>

      <div className='w-10 h-10 top-0 left-[5rem] absolute bg-black opacity-20 rounded-full'></div>
      <div className='w-10 h-10 top-0 right-[5rem] absolute bg-black opacity-20 rounded-full'></div>
          
      <form   onSubmit={submitHandler} className={`bg-[#282f8c5a] rounded-lg flex flex-col  justify-center align-middle shadow-lg  lg:px-[10rem] p-[10px] mx-5 md:mx-[2rem] lg:mx-[20rem] lg:mt-[10rem]  py-[4rem] gap-3 md:px-5`}>
{/* inputs  */}
{/* title */}
<input

className=' pl-3  py-2 cursor-pointer hover:border-[#2C3562]  border rounded-lg shadow-lg'


onChange={(e)=>setTitle(e.target.value)}
value={title}

type="Name" placeholder='Book Title' required/>
{/* created time  */}
<input

className=' pl-3  py-2 cursor-pointer hover:border-[#2C3562]  border rounded-lg shadow-lg'


onChange={(e)=>setTitle(e.target.value)}
value={title}

type="Name" placeholder='created time' required/>
{/* pages */}
<input

className=' pl-3  py-2 cursor-pointer hover:border-[#2C3562]  border rounded-lg shadow-lg'


onChange={(e)=>setTitle(e.target.value)}
value={title}

type="Name" placeholder='Book pages' required/>

{/* pages */}
<input

className=' pl-3  py-2 cursor-pointer hover:border-[#2C3562]  border rounded-lg shadow-lg'


onChange={(e)=>setTitle(e.target.value)}
value={title}

type="Name" placeholder='Book pages' required/>
{/* author */}
<input
className=' hover:border-[#2C3562] border pl-3 py-2 my-3 cursor-pointer   rounded-lg shadow-lg'

onChange={(e)=>setAuthor(e.target.value)}
value={author}
type="" placeholder='Author' />

<input

className='pl-3 hover:border-[#2C3562] rounded-sm py-2 shadow-lg'
onChange={(e)=>setGener(e.target.value)}
value={gener} 

type="" placeholder='Select genres ' />
{/* select genres */}

<input
className='pl-3 hover:border-[#2C3562] w-[full] py-2 my-3 cursor-pointer border rounded-lg shadow-lg'
onChange={(e)=>setPrice(e.target.value)}
value={Price}
type="number" placeholder='Price' />

<div className=' flex gap-5 self-center'>
<button className='px-[1rem] cursor-pointer mt-10 py-[1rem] text-[#ffff] bg-slate-800 w-[9rem]  text-center flex items-center justify-center align-middle self-center text-xl rounded-md hover:shadow-md hover:bg-slate-700 transition-all duration-300 ease-in-out shadow-lg ' >
    Add book
</button>
<button className='px-[1rem] cursor-pointer mt-10 py-[1rem] text-[#ffff] bg-slate-800 w-[9rem]  text-center flex items-center justify-center align-middle self-center text-xl rounded-md hover:shadow-md hover:bg-slate-700 transition-all duration-300 ease-in-out shadow-lg ' >
    delete book
</button>

</div>





      </form>
    </div>
  )
}

export default AddingBook
