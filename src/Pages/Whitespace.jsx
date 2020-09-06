import React, { useState } from 'react';
import {theWords, zeroWords} from './../redux/actions'
import { connect } from 'react-redux';

const Whitespace = (props) => {
    const [angkakata, setangka] = useState(1)
    // const [angkakata, setangka] = useState(0)
    const [kondisi, setkondisi] = useState(true)
    const tambah = angkakata + 1

    const onHandleinput = (e) => {
        console.log(e.target.value.length)
        console.log(e.target.value.trim().length)

        if(kondisi) {
            if(e.target.value.trim().length === e.target.value.length) {
                props.theWords(angkakata)
                console.log(angkakata)
                setkondisi(!kondisi)
            } 
        } else if(e.target.value.trim().length !== e.target.value.length) {
            setangka(tambah)
            setkondisi(true)
        } else if (e.target.value.length === 0) {
            setangka(1)
            props.zeroWords(angkakata)
            console.log(angkakata)
        }

        // props.theWords(angkakata)
        // if(e.target.value.trim().length !== e.target.value.length) {
        //     setangka(tambah)
        //     console.log(angkakata)
        // } else if (e.target.value.length === 0) {
        //     setangka(0)
        //     console.log(angkakata)
        //     props.zeroWords(angkakata)
        // }
    }

    return (
    <>
        <div className='d-flex justify-content-center mb-5'>
            <h1>MASUKKAN KATA</h1>
        </div>
        <div className='d-flex justify-content-center'>
            <textarea cols='50' rows='10' onChange={onHandleinput}></textarea>
        </div>
        <div className='d-flex justify-content-center'>
            <h1>Jumlah kata: {props.kata} </h1>
        </div>
    </>
    )
}

const MapStatetoProps=(state)=> {
    return {
      parkir:state.park,
      kata:state.thewords,
    }
  }
  
  export default connect(MapStatetoProps,{theWords, zeroWords})(Whitespace)