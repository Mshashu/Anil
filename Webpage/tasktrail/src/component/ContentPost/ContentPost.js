import { Card } from 'antd'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ContentPost.css';

export default function ContentPost(props) {
    return (
        <div>
        <div className='grid-content'>
          
            <Card className='card-grid1'>
        <div> <img src={props.imgSrc} width={280} height={180} /></div>
<div className='text-grid1'>
    <div><p style={{lineHeight:"16px"}}><b>Business, Travel </b>-July 2, 2020</p>
    <h1 style={{lineHeight:"18px"}}><b style={{fontSize:'20px', textAlign:"justify"}}>Your most unhappy <br />customers are your greatest <br /> source of learning. </b></h1>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    <div className='tex-grid'><Avatar alt="Remy Sharp" src="https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" />
   <div style={{paddingLeft:"6px", fontSize:"15px"}}><b >Sergy Campbell</b><br /> <p style={{color:"#888" , fontSize:"13px"}}>CEO and Founder</p></div>
    </div>
</div>
    </div>
      </Card>
</div>
</div>
    

    )
}
