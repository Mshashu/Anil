import React from 'react'
import { Input } from 'antd';
import './SecHeader.css'
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';

function SecHeader() {
    return (
        <div className='border-grid'>
             
            <div className='search-mod'><form className='form-mod'><input type="search" className="form-control" placeholder="Search..." prefix={<SearchIcon />}/></form></div>
        <div> <Button><b className='Button-mod'>MAGDESIGN</b></Button></div>
        <div className='twit-mod'><TwitterIcon /></div>
        <div className='face-mod'><FacebookIcon /></div>
        <div className='inst-mod'><InstagramIcon /></div>
        <div className='icon-mod'>
        <DehazeIcon />
    </div>
  
        </div>
    )
}

export default SecHeader
