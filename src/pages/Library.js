import  useTheme  from '../components/store/useTheme';
import React from 'react'
import Cards from '../components/cards/Cards';
import { useFetch } from '../components/hooks/useFetch';
import Searchbar from '../components/searchbar/Searchbar'
const Library = () => {
    const {search}=useTheme();
console.log(search);
    // const {data}=useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB7HQMPsqL4arih1btaqOyyGR20PCtIVrQ`)
    const {data}=useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+terms
    `)


  return (
    <div className='p-[8rem] flex flex-col gap-16' id='hello'>
     <Searchbar/>

     {data && <Cards data={data}/>}


    

    </div>
  )
}

export default Library
