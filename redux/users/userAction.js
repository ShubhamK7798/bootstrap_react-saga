import { GET_USERS, POST_USER_DATA, SET_USERS } from "./userTypes";


export const setUsers =(payload)=>({
    type:SET_USERS,
    payload
})


export const getUsers = ()=>({
    type:GET_USERS
})

export const postUsersData = (userdata) =>({
    type:POST_USER_DATA,
    userdata

})