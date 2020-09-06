export const mobilAction=(jampark)=>{
    return {
      type:'HITUNGMOBIL',
      payload:jampark
    }
}

export const motorAction=(jampark)=>{
  return {
    type:'HITUNGMOTOR',
    payload:jampark
  }
}

export const jamVehicle=(jampark)=>{
  return {
    type:'JAMVEHICLE',
    payload:jampark
  }
}