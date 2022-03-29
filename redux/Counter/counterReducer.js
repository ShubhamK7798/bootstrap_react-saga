
const initialState = {
    countValue : 0
}

export const counterReducer = (state =initialState,action) =>{
    switch(action.type){
        case 'INCREMENT': return {
            ...state,
            countValue:state.countValue + 1
        }
        case 'DECREMENT': return {
            ...state,
            countValue:state.countValue - 1
        }
        case 'INCREMENT_BY_PAYLOAD': return {
            ...state,
            countValue:state.countValue + +action.payload
        }
        default:return state
    }

}
