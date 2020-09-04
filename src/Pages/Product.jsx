import React, {useState, useEffect} from 'react';
import axios from 'axios'

const token = 'WBsLT0lwz7RsIcjA5OI9XsEfDoYn7ttEqKya72EPA2GrKyqfFi'

const Product = () => {
  const [dataProv, setDataProv] = useState([])

  useEffect(()=> {
    axios.get(`https://x.rajaapi.com/MeP7c5ne${token}/m/wilayah/provinsi`)
    .then((response)=> {
      console.log(response.data.data)
      setDataProv(response.data.data)
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
      axios.get(`https://x.rajaapi.com/MeP7c5neWBsLT0lwz7RsIcjA5OI9XsEfDoYn7ttEqKya72EPA2GrKyqfFi/m/wilayah/kabupaten?idpropinsi=${e.target.value}`)
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
    axios.get(`https://x.rajaapi.com/MeP7c5neWBsLT0lwz7RsIcjA5OI9XsEfDoYn7ttEqKya72EPA2GrKyqfFi/m/wilayah/kecamatan?idkabupaten=${e.target.value}`)
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
    axios.get(`https://x.rajaapi.com/MeP7c5neWBsLT0lwz7RsIcjA5OI9XsEfDoYn7ttEqKya72EPA2GrKyqfFi/m/wilayah/kelurahan?idkecamatan=${e.target.value}`)
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

  return (
    <div className='ml-3'>
      <select onChange={handleChangeProv}>
        <option defaultValue="0" hidden>Pilih Provinsi</option>
        {renderProvinsi()}
      </select> <br/><br/>
      <select defaultValue='0' onChange={handleChangeKabu} >
        <option value="0" hidden>Pilih kabupaten</option>
        {renderKabu()}
      </select> <br/><br/>
      <select defaultValue='0' onChange={handleChangeKelu} >
        <option value="0" hidden>Pilih kecamatan</option>
        {renderKeca()}
      </select> <br/><br/>
      <select defaultValue='0' >
        <option value="0" hidden>Pilih kelurahan</option>
        {renderKelu()}
      </select>
    </div>
  )
}

export default Product