import React, { useEffect } from 'react'
import { fetchAxiosUsers, useAxios } from '../axios'

let user;
const Axios = () => {
  const res = useAxios('/api/users')
  console.log('ressss')
  console.log(res)

  return (
    <div>axios</div>
  )
}

export default Axios