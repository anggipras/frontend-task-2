import React,{createRef} from 'react';
import './App.css';

var data = [
  {nama: 'budi', usia: 5, alamat: 'jl. sukahari'},
  {nama: 'andi', usia: 4, alamat: 'jl. suka minggu'},
  {nama: 'santi', usia: 3, alamat: 'jl. suka bulan'}
]

class App extends React.Component {
  state = {
    angka:0,
    datamurid:[],
    nama: '',
    usia: '',
    alamat: '',
    indexdelete: -1,
    indexedit: -1
  }

  // namaref = createRef()
  // usiaref = createRef()
  // alamatref = createRef()

  onInputChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount(){
    console.log('masuk didmount') //didmount digunakan biasanya untuk ngeload data dari backend
    setTimeout(()=>{
      this.setState({datamurid:data})
    },500)
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

  // onclickaja = ()=>{
  //   var nama = this.namaref.current.value
  //   var usia = this.usiaref.current.value
  //   // var nama=this.state.nama kalau pake onchange
  //   // var usia=this.state.usia
  //   this.setState({nama,usia})
  //   console.log(nama,usia)    
  // }

  onTambahClick=(e)=>{
    e.preventDefault()
    // var nama=this.namaref.current.value
    // var usia=this.usiaref.current.value
    // var alamat=this.alamatref.current.value

    var nama = this.state.nama
    var usia = this.state.usia
    var alamat = this.state.alamat

    var datamurid=this.state.datamurid
    datamurid.push({nama,usia,alamat:alamat})
    this.setState({datamurid})
    // this.namaref.current.value=''
    // this.usiaref.current.value=''
    // this.alamatref.current.value=''

    this.setState({nama: '', usia: '', alamat: ''})
  }

  deleteProd = (getInd) => {
    this.setState({indexdelete: getInd})
  }

  yesdel = () => {
    var datamurid = this.state.datamurid
    datamurid.splice(this.state.indexdelete, 1)
    this.setState({indexdelete: -1})
  }

  editProd = (getInd) => {
    this.setState({indexedit: getInd})
  }

  yesedit = (getInd) => {
    // var nama=this.namaref.current.value
    // var usia=this.usiaref.current.value
    // var alamat=this.alamatref.current.value

    var nama = this.state.nama
    var usia = this.state.usia
    var alamat = this.state.alamat

    var datamurid = this.state.datamurid
    datamurid.splice(getInd, 1, {nama, alamat, usia})
    this.setState({indexedit: -1, datamurid})
  }

  cancelbtn = () => {
    this.setState({indexdelete: -1, indexedit: -1})
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
              <input type='button' value="Yes" onClick={this.yesdel}/>
            </td>
            <td>
              <input type='button' value="Cancel" onClick={this.cancelbtn}/>
            </td>
          </tr>
        )
      } else if (index === this.state.indexedit) {
        return (
          <tr key={index}>
            <td>{index+1}</td>
            <td>
              <input name='nama' type='text' onChange={this.onInputChange}/>
            </td>
            <td>
              <input name='usia' type='text' onChange={this.onInputChange}/>
            </td>
            <td>
              <input name='alamat' type='text' onChange={this.onInputChange}/>
            </td>
            <td>
              <input type='button' value="Save" onClick={()=>this.yesedit(index)}/>
            </td>
            <td>
              <input type='button' value="Cancel" onClick={this.cancelbtn}/>
            </td>
          </tr>
        )
      } else {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{val.nama}</td>
              <td>{val.usia}</td>
              <td>{val.alamat}</td>
              <td>
                <input type='button' value="Delete" onClick={()=>this.deleteProd(index)}/>
              </td>
              <td>
                <input type='button' value="Edit" onClick={()=>this.editProd(index)}/>
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
          <h1>Murid Tk Sukamaju</h1>
          <div>
            <form onSubmit={this.onTambahClick}>
              <div><input type='text' name='nama' value={this.state.nama} className='form-control' placeholder='masukkan nama bos' onChange={this.onInputChange}/></div>
              <div><textarea cols='20' name='alamat' value={this.state.alamat} className='form-control' rows='6' placeholder='masukkan alamat bos' onChange={this.onInputChange}/></div>
              <div><input type='number' name='usia' value={this.state.usia} className='form-control' placeholder='masukkan nama usia' onChange={this.onInputChange}/></div>
              <button type='submit'  className='btn btn-primary mt-2'>
                tambahkan
              </button>
            </form>
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

export default App;