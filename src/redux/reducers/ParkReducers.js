const InitialState = 0

const ParkReducer = (state=InitialState, action) => {
    switch (action.type) {
        case 'HITUNGMOBIL':
            return (action.payload) * 2000
        case 'HITUNGMOTOR':
            return (action.payload) * 1000
        default:
            return state
    }
}

export default ParkReducer