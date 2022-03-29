import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostUser from '../components/PostUser'
import Table from '../components/Table'
import { getUsers } from '../redux/users/userAction'

const Users = () => {
    const dispatch = useDispatch()
    const usersData = useSelector(state=>state.users.users)

    useEffect(()=>dispatch(getUsers()),[])

    const handleGetUsers=()=>{
      dispatch(getUsers())
    }
  return (
    <div className='container w-50 d-flex flex-column gap-5 mt-5'>
        <PostUser/>
        <button className='w-25 ' onClick={handleGetUsers}>getUsers</button>
        
        <Table usersData={usersData} /> 






    </div>
  )
}

export default Users