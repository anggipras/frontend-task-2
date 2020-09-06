const InitialState = 0

const JamReducer = (state=InitialState, action) => {
    switch (action.type) {
        case 'JAMVEHICLE':
            return action.payload
        default:
            return state
    }
}

export default JamReducer