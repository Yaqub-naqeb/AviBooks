import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ActionAreaCard(item) {

    
console.log(item.item.id);



//image url
let image=item.item.volumeInfo.imageLinks && item.item.volumeInfo.imageLinks.smallThumbnail;

//title url
let title=item.item.volumeInfo.imageLinks && item.item.volumeInfo.title


//id url
let id=item.item.id;
 
// 
const idHandler=()=>{
  
  console.log('ehkdflsj');


}

  return (


<Link to={`/cardinfo/${id}`}>
    <Card className='text-center w-full ' onClick={idHandler} sx={{ maxWidth: 235 }}>
      <CardActionArea className='h-full' >
        <CardMedia
       
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
           
          </Typography>
          <Typography variant="body2" color="text.secondary">
          15$
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
