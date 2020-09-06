import React, {useState} from 'react';
import './Parkir.css'
import { connect } from 'react-redux';
import {mobilAction, motorAction, jamVehicle} from './../redux/actions'

const Parkir = (props) => {
    const [jampark, setjampark] = useState('')
    const [vehicle, setvehicle] = useState('')

    const handleButton = (e) => {
        if(e.target.value === 'mobil') {
            setvehicle('mobil')
        } else {
            setvehicle('motor')
        }
    }

    const payPark = () => {
        if (vehicle === 'mobil') {
            props.mobilAction(jampark)
        } else {
            props.motorAction(jampark)
        }
        props.jamVehicle(jampark)
    }

    return (
        <div className='parkirbro'>
            <div onClick={handleButton}>
                <button className='btn btn-warning separation' value='mobil'>Mobil</button>
                <button className='btn btn-success separation' value='motor'>Motor</button><br/>
            </div>
            <input type="number" value={jampark} onChange={(e)=>setjampark(e.target.value)} />
            <button className='btn btn-primary' onClick={payPark}>Pay</button><br/>
            <h1>Biaya Parkir: Rp. {props.parkir}</h1>
        </div>
    )
}

const MapStatetoProps=(state)=> {
    return {
      parkir:state.park,
    }
  }
  
  export default connect(MapStatetoProps,{mobilAction, motorAction, jamVehicle})(Parkir)
