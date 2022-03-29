// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


let usersData = [
  {
    "userName":"Shubham",
    "role":"React Developer",
    "company":"appscrip"
}]

export default function handler(req, res) {

  const {method} = req

  if(method === 'GET'){
    res.status(200).json(usersData)

  }
  if(method === 'POST'){
    const newData = [...usersData,req.body]
    usersData = [...newData]

    res.status(200).json(usersData)

  }
  
}
