import { DECREMENT, INCREMENT, INCREMENT_BY_PAYLOAD } from "./counterType";


const increment = () => ({
    type:INCREMENT
})

const decrement = () => ({
    type:DECREMENT
})

const incrementByPayload = (payload) =>({
    type:INCREMENT_BY_PAYLOAD,
    payload:payload
})

export {increment,decrement,incrementByPayload}