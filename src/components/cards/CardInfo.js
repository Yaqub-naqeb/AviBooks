import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import Icon from '../imgs/book.png'
import IconMob from '../imgs/viber_image_2022-08-29_19-29-34-622.png'
import { Link } from 'react-router-dom';
import { bgcolor } from '@mui/system';
import './Cardinfo.css'
const CardInfo = () => {
    const {id}=useParams();

// .replace(":","")
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyBLmw55bH-rB7hKD-CPJPvlTI0LtQ5tAK8`;
    
      const { data} = useFetch(url);




      
  return (


<div id={`${id}`}  className='bg-[#1A195F]  h-[100vh] md:pt-[3rem] lg:pt-[3rem]  overflow-x-hidden'>


    <div
    //
     className=' flex pc   gap-20  pt-[8rem] align-middle justify-center '>
      
{/* img */}



<div  className='bg-[#fff] flex flex-col align-middle justify-center  lg:w-[20rem] h-[100vh] md:w-[20rem]   w-full absolute left-5 top-0 z-50'>

<div className=' absolute top-4 left-2'>
<Link to='/'><img src={Icon} alt="" className='ml-8  w-[3rem]' /></Link>
<p className='text-[#1a195f] text-[1.3rem] font-[700]'>AVIBOOKS</p>
</div>



{data&&<img className=' mt-[6rem] ml-[17%]  w-[13rem] rounded-sm' src={data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.smallThumbnail} alt="" />}

<button className='bg-[#1A195F] w-[10rem]  p-1 m-1 mt-5 mx-auto text-[#fff] font-medium rounded-full hover:text-[#ffff] hover:bg-[#1a195fb5] border-solid border-2 border-[#1a195f93] '>Read</button>
<button className='bg-[#ffff] w-[8rem]  p-1 m-2  mx-auto text-[#1A195F] font-medium rounded-full  border-solid border-2 border-[#1a195f93] hover:text-[#ffff] hover:bg-[#1a195fb5]'>Buy</button>
</div>




{/* info */}
<div    className='  px-[23rem] '>

  {data && <div className=' '>

<div className='flex flex-col gap-3 '>

<div className='text-[2rem] text-[#ffff] font-medium'>{
data.volumeInfo.title}</div>


 {data.volumeInfo.authors && <p> <strong className='text-[#ffffffe1]'>Author:</strong> <span className='text-[#ffffff89]'>{data.volumeInfo.authors}</span> </p>}
 {data.volumeInfo.categories &&  <p> <strong className='text-[#ffffffef]'>
  Gener:</strong> <span className='text-[#ffffff8b]' >{data.volumeInfo.categories}</span></p>}
{ data.volumeInfo.language && <p> <strong className='text-[#ffffffef]'>Language:</strong> <span className='text-[#ffffff94]'>{data.volumeInfo.language}</span> </p>
}  
  {data.volumeInfo.pageCount&& <p className=''> <strong className='text-[#ffffffe1]' >Pages: </strong> <span className='text-[#ffffff7e]'>{data.volumeInfo.pageCount}</span> </p>} 

   { data.volumeInfo.publishedDatet &&<p > <strong className='text-[#ffffffcd]'> Published Date:</strong>  <span className='text-[#ffffff52]'>{data.volumeInfo.publishedDate}</span>  </p>}


<div>
   
{data.volumeInfo.description && <p className=''> <strong className='text-[#ffffffe1]'>Discription: </strong> <span className='text-[#e9e9e98d] '>{data.volumeInfo.description}</span> </p> }
</div>



</div>
    </div>}



</div>

    </div>
    
{/* mobile */}

<div className='   mb hidden bg-[#fff] w-full h-full overflow-x-hidden'>

<div className=' absolute pt-2 pl-2 bg-[#1A195F] w-full '>
<Link to='/library'><img src={IconMob}  alt="" className='ml-8  w-[2rem]' /></Link>
<p className='text-[#ffff] ml-2 z-50 text-[1rem] font-[700]'>AVIBOOKS</p>
</div>



<div>

{data&& <>

  <p className='text-[1.5rem] text-center text-[#1a195fd5] px-5  pt-[10rem] font-medium'>{
data.volumeInfo.title}</p>

{data&&<img className=' mt-[3rem] ml-[30%]  w-[11rem] rounded-sm' src={data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.smallThumbnail} alt="" />}
{/* btn */}
<div className='flex flex-col w-full align-middle justify-center gap-3 mt-5 mr-8'>
<button className='bg-[#1A195F] w-[10rem]  p-1 m-1  mx-auto text-[#fff] font-medium rounded-full hover:text-[#ffff] hover:bg-[#1a195fb5] border-solid border-2 border-[#1a195f93] '>Read</button>
<button className='bg-[#ffff] w-[13rem] p-1 mx-auto  m-1 text-[#1A195F] font-medium rounded-full  border-solid border-2 border-[#1a195f93] hover:text-[#ffff] hover:bg-[#1a195fb5]'>Buy</button>
</div>


<div className='pl-6 pt-5 flex flex-col gap-2 align-middle justify-center'>
{data.volumeInfo.authors && <p> <strong className='text-[#1A195F]'>Author:</strong> <span className='text-[#1a195fc9]'>{data.volumeInfo.authors}</span> </p>}

{data.volumeInfo.categories &&  <p> <strong className='text-[#1A195F]'>
  Gener:</strong> <span className='text-[#1A195F]' >{data.volumeInfo.categories}</span></p>}
{ data.volumeInfo.language && <p> <strong className='text-[#1A195F]'>Language:</strong> <span className='text-[#1A195F]'>{data.volumeInfo.language}</span> </p>
}  
  {data.volumeInfo.pageCount&& <p className=''> <strong className='text-[#1A195F]' >Pages: </strong> <span className='text-[#1A195F]'>{data.volumeInfo.pageCount}</span> </p>} 

   { data.volumeInfo.publishedDatet &&<p > <strong className='text-[#1A195F]'> Published Date:</strong>  <span className='text-[#1A195F]'>{data.volumeInfo.publishedDate}</span>  </p>}

   {data.volumeInfo.description && <p className=''> <strong className='text-[#1A195F]'>Discription: </strong> <span className='text-[#1A195F] '>{data.volumeInfo.description}</span> </p> }
</div>
</>}



</div>


</div>











    </div>
  )
  
}



export default CardInfo

