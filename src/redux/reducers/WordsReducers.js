const InitialState = 0

const WordsReducers = (state=InitialState, action) => {
    switch (action.type) {
        case 'THEWORDS':
            return action.payload
        case 'ZEROWORDS':
            return action.payload * 0
        default:
            return state
    }
}

// const WordsReducers = (state=InitialState, action) => {
//     switch (action.type) {
//         case 'THEWORDS':
//             return action.payload + 1
//         case 'ZEROWORDS':
//             return action.payload * 0
//         default:
//             return state
//     }
// }

export default WordsReducers