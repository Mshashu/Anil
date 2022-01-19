 import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Card } from 'antd';
import '../Post/Post.css';
export default function Post(props) {
    return (
     
        <Card className='card-grid3'>
        <div> <img src={props.imgSrc}
          width={159} height={150} /></div>
       <p>Hu</p>
      </Card>
 
    )
}
