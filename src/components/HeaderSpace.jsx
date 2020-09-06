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

const HeaderSpace = (props) => {
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

    const toggle = () => setIsOpen(!isOpenModal);

    return (
    <div className='header barbar'>
      <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpenModal} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='pt-2 mr-2'>
              <Link className='barbar' to="/">HOME</Link>
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
          </Nav>
        <NavbarText>
            Jumlah kata: {props.kata} <br/>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}

const MapStatetoProps=(state)=> {
  return {
    parkir:state.park,
    jam:state.thetime,
    kata:state.thewords
  }
}

export default connect(MapStatetoProps)(HeaderSpace)
