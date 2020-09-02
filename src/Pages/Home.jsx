import React from 'react';
import './Home.css'
import Swal from 'sweetalert2'
import Particles from 'react-particles-js'

var data = [
  {nama: 'budi', usia: 5, alamat: 'jl. sukahari'},
  {nama: 'andi', usia: 4, alamat: 'jl. sukaminggu'},
  {nama: 'santi', usia: 3, alamat: 'jl. sukabulan'}
]

const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class Home extends React.Component {
  state = {
    angka:0,
    datamurid:[],
    nama: '',
    usia: '',
    alamat: '',
    indexdelete: -1,
    indexedit: -1,
    editform: {
      editnama: '',
      editusia: '',
      editalamat: ''
    }
  }

  onInputChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount(){
    // console.log('masuk didmount') //didmount digunakan biasanya untuk ngeload data dari backend
    setTimeout(()=>{
      this.setState({datamurid:data})
    },100)
  }
  
  componentDidUpdate(){
    // if(this.state.angka > 5){
    //   this.setState({angka:-5})
    // }
    //console.log('masuk didupdate') //disarankan nggak boleh setstate setstate di didupdate
  }

  componentWillUnmount(){
    console.log('dmd')
  }

  onTambahClick=(e)=>{
    e.preventDefault()

    var nama = this.state.nama
    var usia = this.state.usia
    var alamat = this.state.alamat

    var datamurid=this.state.datamurid
    datamurid.push({nama,usia,alamat:alamat})
    this.setState({datamurid})

    Swal.fire({
      title: 'Apakah anda yakin?',
      text: "Data yang sudah di input, tidak bisa ditarik lagi!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, tambahkan!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Tertambahkan!',
          'Data anda sudah ditambahkan ke tabel.',
          'success'
        )
      }
    })

    this.setState({nama: '', usia: '', alamat: ''})
  }

  deleteProd = (getInd) => {
    this.setState({indexdelete: getInd})
  }

  yesdel = () => {
    var {datamurid, indexdelete} = this.state
    datamurid.splice(indexdelete, 1)
    this.setState({datamurid, indexdelete: -1})
  }

  editProd = (getInd) => {
    var {nama, usia, alamat} = this.state.datamurid[getInd]
    var editformyuk = this.state.editform
    editformyuk = {...editformyuk, editnama:nama, editusia:usia, editalamat:alamat}
    this.setState({indexedit: getInd, editform: editformyuk})
  }

  yesedit = () => {
    var {editnama, editusia, editalamat} = this.state.editform
    var datamurid = this.state.datamurid
    var datamuridsatuan = datamurid[this.state.indexedit]
    datamuridsatuan = {...datamuridsatuan, nama:editnama, usia:editusia, alamat: editalamat}
    datamurid.splice(this.state.indexedit,1,datamuridsatuan)
    this.setState({datamurid: datamurid, indexedit: -1})
  }

  cancelbtn = () => {
    this.setState({indexdelete: -1, indexedit: -1})
  }

  onChangeHandle = (e, namaprops) => {
    this.setState({editform: {...this.state.editform,[namaprops]: e.target.value}})
  }

  renderDatamurid=()=>{
    return this.state.datamurid.map((val,index)=>{
      if(index === this.state.indexdelete) {
        return (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{val.nama}</td>
            <td>{val.usia}</td>
            <td>{val.alamat}</td>
            <td>
              <input className='btn btn-success' type='button' value="Yes" onClick={this.yesdel}/>
            </td>
            <td>
              <input className='btn btn-danger' type='button' value="Cancel" onClick={this.cancelbtn}/>
            </td>
          </tr>
        )
      } else if (index === this.state.indexedit) {
        return (
          <tr key={index}>
            <td>{index+1}</td>
            <td>
              <input type='text' value={this.state.editform.editnama} onChange={(e)=>this.onChangeHandle(e, 'editnama')}/>
            </td>
            <td>
              <input type='text' value={this.state.editform.editusia} onChange={(e)=>this.onChangeHandle(e, 'editusia')}/>
            </td>
            <td>
              <input type='text' value={this.state.editform.editalamat} onChange={(e)=>this.onChangeHandle(e, 'editalamat')}/>
            </td>
            <td>
              <input className='btn btn-success' type='button' value="Save" onClick={this.yesedit}/>
            </td>
            <td>
              <input className='btn btn-danger' type='button' value="Cancel" onClick={this.cancelbtn}/>
            </td>
          </tr>
        )
      } else {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{val.nama.toUpperCase()}</td>
              <td>{val.usia + ' TAHUN'}</td>
              <td>{val.alamat.toUpperCase()}</td>
              <td>
                <input className='btn btn-warning' type='button' value="Delete" onClick={()=>this.deleteProd(index)}/>
              </td>
              <td>
                <input className='btn btn-info' type='button' value="Edit" onClick={()=>this.editProd(index)}/>
              </td>
            </tr>
          )
      }

    })
  }

  render() {
    if(this.state.datamurid.length !== 0){
      return (
        <div style={{height:'100vh'}} className="mt-3 d-flex justify-content-center flex-column align-items-center">
        <Particles className='particles' params={particleOptions}/>
          <div className='titles mb-4'>DATA MURID</div>
          <div>
            <form onSubmit={this.onTambahClick}>
              <input type='text' name='nama' value={this.state.nama} className='form-control' placeholder='nama' onChange={this.onInputChange}/> <br/>
              <textarea cols='20' name='alamat' value={this.state.alamat} className='form-control' rows='6' placeholder='alamat' onChange={this.onInputChange}/> <br/>
              <input type='number' name='usia' value={this.state.usia} className='form-control' placeholder='usia' onChange={this.onInputChange}/> <br/>
              <button type='submit'  className='btn btn-primary mt-2'>
                Tambahkan!
              </button>
            </form> <br/>
          </div>
           <table>
             <thead>
               <tr>
                 <th>No.</th>
                 <th>Nama</th>
                 <th>Usia</th>
                 <th>alamat</th>
                 <th colSpan='2'>Action</th>
               </tr>
             </thead>
             <tbody>
                {this.renderDatamurid()}
             </tbody>
           </table>
            
        </div>  
      );
    }else{
      return(
        <h1>loading</h1>
      )
    }
  }
}

export default Home;