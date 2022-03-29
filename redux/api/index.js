import axios from "axios";


export const fetchRandomDogs = ()=> axios.get('https://dog.ceo/api/breeds/image/random')

export const handleGetUsers = () => axios.get("http://localhost:3000/api/users");

export const handlePostUsers = (userData) => axios.post('http://localhost:3000/api/users',userData)

