import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Fetch = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then(res=>res.json())
        .then(data => setUsers(data))
    },[])

  return (
    <div style={{backgroundColor: "lavender", width:"50%", margin:"50px"}}>
        <h1>User Data</h1>
        <ul>
            {
                users.map(user =>{
                    return <li key={user.id}>{user.login}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Fetch