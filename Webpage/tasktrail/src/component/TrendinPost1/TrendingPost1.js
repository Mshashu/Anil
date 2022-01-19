import React from 'react'
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import './TrendingPost1.css';
export default function TrendingPost1(props) {
    return (
        <div>
        <Card className='grid-card'>
        <div> <img src={props.imageSource}
          width={750} height={450} /></div>
        <div className='text-grid1'>
          <div><p><b>Business, Travel </b>-July 2, 2020</p>
            <h1><b style={{ fontSize: '22px', lineHeight:'0px'}}>Your most unhappy customers are your greatest source of learning. </b></h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.</p>
            <div className='tex-grid1'><Avatar alt="Remy Sharp" src="https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" />
              <div style={{ fontSize: "15px" }}><b >Sergy Campbell</b><br /> <p style={{ color: "#888", fontSize: "13px" }}>CEO and Founder</p></div>

            </div>
          </div>
        </div>
      </Card>
      </div>
   
    )
}
