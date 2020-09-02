import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
    <div className='header d-flex justify-content-start'>
        <div className=' p-3'>
            <Link className='barbar' to='/home'>Home</Link>
        </div>
        <div className='p-3'>
            <Link className='barbar' to='/product'>Product</Link>
        </div>
        <div className='p-3'>
            <Link className='barbar' to='/topics'>Topic</Link>
        </div>
    </div>
    )
}

export default Header