import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText
  } from 'reactstrap';
import './Header.css'
import {connect} from 'react-redux'

var angka = 0

const Header = (props) => {
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
    <div className='header barbar'>
      <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpenModal} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='pt-2 mr-2'>
              <Link className='barbar' to="/">DATA</Link>
            </NavItem>
            <NavItem className='pt-2 mr-2'>
              <Link className='barbar' to="/wilayah">WILAYAH</Link>
            </NavItem>
            <NavItem className='pt-2 mr-2'>
              <Link className='barbar' to="/topics">Topics</Link>
            </NavItem>
            <NavItem className='pt-2 mr-2'>
              <Link className='barbar' to="/parkir">PARKIR</Link>
            </NavItem>
            <NavItem className='pt-2 mr-2'>
              <Link className='barbar' to="/whitespace">WHITESPACE</Link>
            </NavItem>
            <NavItem className='pt-2 mr-2'>
              <Link className='barbar' to="/apizomato">ZOMATO API</Link>
            </NavItem>
          </Nav>
        <NavbarText>
            {props.bebas}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}

const MapStatetoProps=(state)=> {
  return {
    bebas:state.angka
  }
}

export default connect(MapStatetoProps)(Header)
