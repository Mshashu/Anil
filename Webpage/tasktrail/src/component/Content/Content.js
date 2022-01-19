import React from 'react'
import './Content.css'
import 'antd/dist/antd.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TrendingPost from '../TrendingPost/TrendingPost';
import ContentPost from '../ContentPost/ContentPost'
import TrendingPost1 from '../TrendinPost1/TrendingPost1';
import Post from '../Post/Post';
function Content() {
   
    return (
        <div className='content-grid'>
           <div className='Trend-mod'><b>Trending</b></div>

           <div className='size-image'>
           <Carousel autoPlay >
               <TrendingPost imageSource="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_3.jpg.pagespeed.ic.mswrKN26bY.webp"/>
                <TrendingPost imageSource="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_2.jpg.pagespeed.ic.t0aph6N0mC.webp"/>
                <TrendingPost imageSource="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp"/>
               <TrendingPost imageSource="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_1.jpg.pagespeed.ic.FHpKG3L7pq.webp"/>  
               </Carousel>
               </div>
           <div className='col-grid'> 
                < ContentPost imgSrc="https://preview.colorlib.com/theme/magdesign/images/ximg_5.jpg.pagespeed.ic.gHoSUxJvjD.webp" />
                <ContentPost imgSrc="https://preview.colorlib.com/theme/magdesign/images/ximg_4.jpg.pagespeed.ic.2DwdgZu3vw.webp"/>           
           <ContentPost imgSrc="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp"/>
           < ContentPost imgSrc="https://preview.colorlib.com/theme/magdesign/images/ximg_5.jpg.pagespeed.ic.gHoSUxJvjD.webp" />
                <ContentPost imgSrc="https://preview.colorlib.com/theme/magdesign/images/ximg_4.jpg.pagespeed.ic.2DwdgZu3vw.webp"/>           
           <ContentPost imgSrc="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp"/>
           </div>
           <div>
                <h1 className='header-grd'>Most Popular Posts</h1>
                <div className='corsoul-grid'>
                <Carousel >
           <TrendingPost1 imageSource="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_3.jpg.pagespeed.ic.mswrKN26bY.webp"/>
           <TrendingPost1 imageSource="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_2.jpg.pagespeed.ic.t0aph6N0mC.webp"/>
           <TrendingPost1 imageSource="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp"/>
           <TrendingPost1 imageSource="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_1.jpg.pagespeed.ic.FHpKG3L7pq.webp"/>
           </Carousel>
           </div></div>
          <div >
             <Post imgSrc="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_3.jpg.pagespeed.ic.mswrKN26bY.webp"/>
          </div>
        </div>
    )
}

export default Content
