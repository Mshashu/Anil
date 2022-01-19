import React from 'react'
import Card from '@material-ui/core/Card';

import Avatar from '@material-ui/core/Avatar';
import './TrendingPost.css';
function TrendingPost(props) {
  return (

    
      <Card className='card-grid'>
        <div> <img src={props.imageSource}
          width={385} height={400} /></div>
        <div className='text-grid'>
          <div><p><b>Business, Travel </b>-July 2, 2020</p>
            <h1><b style={{ fontSize: '40px', lineHeight:'0px'}}>Your most unhappy <br />customers are your greatest <br /> source of learning. </b></h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div className='tex-grid'><Avatar alt="Remy Sharp" src="https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" />
              <div style={{ paddingLeft: "6px", fontSize: "15px" }}><b >Sergy Campbell</b><br /> <p style={{ color: "#888", fontSize: "13px" }}>CEO and Founder</p></div>

            </div>
          </div>
        </div>
      </Card>
    



  )
}

export default TrendingPost
