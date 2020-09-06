import React, {useState, useEffect} from 'react';
import './Product.css'
import axios from 'axios'
import { connect } from 'react-redux';
import {tambahangkaAction,kurangangkaAction} from './../redux/actions'

const Product = (props) => {
  const [dataProv, setDataProv] = useState([])

  useEffect(()=> {
    axios.get(`https://x.rajaapi.com/MeP7c5ne${props.dataToken}/m/wilayah/provinsi`)
    .then((response)=> {
      console.log(response.data.data)
      setDataProv(response.data.data)
      // props.gantidata(response.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const renderProvinsi = () => {
    return dataProv.map((value)=> {
      return <option key={value.id} value={value.id}>{value.name}</option>
    })
  }

  const [dataKabu, setDataKabu] = useState([])

  const handleChangeProv = (e) => {
      console.log(e.target.value)
      axios.get(`https://x.rajaapi.com/MeP7c5ne${props.dataToken}/m/wilayah/kabupaten?idpropinsi=${e.target.value}`)
      .then((response)=> {
        console.log(response.data.data)
        setDataKabu(response.data.data)
      }).catch((err)=>{
        console.log(err)
      })
  }

  const renderKabu = () => {
    return dataKabu.map((value)=> {
      return <option key={value.id} value={value.id}>{value.name}</option>
    })
  }

  const [dataKeca, setDataKeca] = useState([])

  const handleChangeKabu = (e) => {
    console.log(e.target.value)
    axios.get(`https://x.rajaapi.com/MeP7c5ne${props.dataToken}/m/wilayah/kecamatan?idkabupaten=${e.target.value}`)
    .then((response)=> {
      console.log(response.data.data)
      setDataKeca(response.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const renderKeca = () => {
    return dataKeca.map((value)=> {
      return <option key={value.id} value={value.id}>{value.name}</option>
    })
  }

  const [dataKelu, setDataKelu] = useState([])

  const handleChangeKelu = (e) => {
    console.log(e.target.value)
    axios.get(`https://x.rajaapi.com/MeP7c5ne${props.dataToken}/m/wilayah/kelurahan?idkecamatan=${e.target.value}`)
    .then((response)=> {
      console.log(response.data.data)
      setDataKelu(response.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const renderKelu = () => {
    return dataKelu.map((value)=> {
      return <option key={value.id} value={value.id}>{value.name}</option>
    })
  }

  const [angka, setangka] = useState(1)

  const tambahAngka = () => {
    props.tambahangkaAction(angka)
  }

  const kurangAngka = () => {
    props.kurangangkaAction()
  }

  return (
    <div className='productbro'>
      <select onChange={handleChangeProv}>
        <option defaultValue="0" hidden>Pilih Provinsi</option>
        {renderProvinsi()}
      </select>
      <select defaultValue='0' onChange={handleChangeKabu} >
        <option value="0" hidden>Pilih kabupaten</option>
        {renderKabu()}
      </select>
      <select defaultValue='0' onChange={handleChangeKelu} >
        <option value="0" hidden>Pilih kecamatan</option>
        {renderKeca()}
      </select>
      <select defaultValue='0' >
        <option value="0" hidden>Pilih kelurahan</option>
        {renderKelu()}
      </select>
      <div>
        <h1>
          {props.bebas}
        </h1>
        <input type="number" value={angka} onChange={(e)=>setangka(parseInt(e.target.value))}/>
        <button className='btn btn-success' onClick={tambahAngka}>+</button>
        <button className='btn btn-danger' onClick={kurangAngka}>-</button>
      </div>
    </div>
  )
}

const MapStatetoProps=(state)=> {
  return {
    bebas:state.angka,
  }
}

export default connect(MapStatetoProps,{tambahangkaAction, kurangangkaAction})(Product)