import { GET_RANDOM_DOGS, SET_DOG } from "./dogsType";


export const setRandomDogs = (payload)=>({
    type:SET_DOG,
    payload
})
export const getRandomDogs = ()=>({
    type:GET_RANDOM_DOGS,
})