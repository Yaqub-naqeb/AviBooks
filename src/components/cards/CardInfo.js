import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const CardInfo = () => {
    const {id}=useParams();
    // const {data}=useFetch(`https://books.google.com/ebooks?id=${id}&dq=holmes&as_brr=4&source=webstore_bookcard`)

    const url = `https://www.googleapis.com/books/v1/volumes/${id.replace(":","")}?key=AIzaSyBLmw55bH-rB7hKD-CPJPvlTI0LtQ5tAK8`;
      const { data} = useFetch(url);


  return (
    <div>
      Card Info
    </div>
  )
}

export default CardInfo

