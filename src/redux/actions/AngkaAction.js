export const tambahangkaAction=(angka)=>{
    return {
      type:'TAMBAH',
      payload:angka
    }
}

export const kurangangkaAction=()=>{
    return {
        type:'KURANG'
    }
}