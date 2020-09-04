import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
  } from 'reactstrap';
import './Header.css'

var angka = 0

const Header = () => {
    const [isOpenModal, setIsOpen] = useState(false)
    useEffect (()=>{
        console.log('didmount')
    }, []) //sama dengan didmount

    useEffect(()=>{
        if(angka > 0) {
            console.log('didupdate')
        } else {
            angka++
        }
    })

    useEffect(()=> {
        return ()=> {
            //your code here
        }
    }) //willunmount

    const toggle = () => setIsOpen(!isOpenModal);

    return (
    // <div className='header d-flex justify-content-start'>
    //     <div className=' p-3'>
    //         <Link className='barbar' to='/'>Home</Link>
    //     </div>
    //     <div className='p-3'>
    //         <Link className='barbar' to='/product'>Product</Link>
    //     </div>
    //     <div className='p-3'>
    //         <Link className='barbar' to='/topics'>Topic</Link>
    //     </div>
    // </div>
    <div>
      <Navbar light color='purple' expand="md">
        <NavbarBrand href='/' >reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpenModal} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='pt-2 mr-2'>
              <Link to="/product">product</Link>
            </NavItem>
            <NavItem className='pt-2 mr-2'>
              <Link to="/topics">Topics</Link>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default Header