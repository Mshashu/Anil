import React from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
function Footer() {
    return (
        <div>
            <h1><b>Subscribe to newsletter</b></h1>
          <div className='grid-search'> <div><Input placeholder="Basic usage" width={550} height={69}/></div>
          <div> <Button type="primary" block>
      Primary
    </Button></div></div> 
        </div>
    )
}

export default Footer
