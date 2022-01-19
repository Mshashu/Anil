import React from 'react';
import './Header.css';
import './colorlib.png'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    return (
        <div className='Header-grid'>
        <div >
  <div className='img-mod'><a href='https://colorlib.com/wp/templates/' ><img src='https://colorlib.com/lib/img/colorlib-logo.png' width={123} height={30} /></a></div> 
        </div>
      <div><a href="#" className='select-Product'>+ Magdesign <span className="badge">Template</span></a></div>
            <div className='desk-mod'><DesktopWindowsIcon width={400} height={40}/></div>
            <div className='phone-mod'><PhoneAndroidIcon /></div>
            <div className='cell-mod'><SettingsCellIcon /></div>
            <div className='shop-mod'><ShoppingCartIcon /></div>
            <div className='close-mod'><CloseIcon /></div>
        </div>

    )
}

export default Header
