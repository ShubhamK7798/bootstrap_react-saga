

export const dogsReducer = (state=null,action)=>{
    switch(action.type){
        case 'SET_DOG':return {
            
            state:action.payload

        }
        default:return state
    }

}