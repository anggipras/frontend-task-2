export const theWords=()=>{
    return {
      type:'THEWORDS',
    }
  }

  export const differWords=()=>{
    return {
      type:'DIFFERWORDS',
    }
  }

  export const zeroWords=(angkakata)=>{
    return {
      type:'ZEROWORDS',
      payload:angkakata
    }
  }