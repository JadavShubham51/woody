import React, { useEffect, useState } from 'react'
import Aheader from '../acommon_component/Aheader'
import Afooter from '../acommon_component/Afooter'
import axios from 'axios'

function Usermange() {

    const [data,setdata]= useState()
    
    useEffect(()=>{
        fetch()
    })
    
    const fetch=async()=>{
        const res = await axios.get(`http://localhost:3000/user`)
        console.log(res.data)
        setdata(res.data)
    }

    const statushandle = async (id)=>{
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        const currntStatus = res.data.status;

        try {
            if(currntStatus === "block")
                {
                    const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"unblock"})
                    if(res.status === 200)
                        {
                            console.log("Status changed to unblock successfull")
                            fetch()
                        }
                        
                }
                else if(currntStatus === "unblock")
                    {
                        const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"block"})
                        if(res.status === 200)
                            {
                                console.log("Status changed to block successfull")
                                fetch()
                            }
                            
                    }

                
        } catch (error) {
            console.error("Error updating status.please try agian")
        }
    }

  return (
    <div>
      <Aheader/>
      <div className="container my-5">
        <h1 className="text-center">Manger service</h1>
        <table className='table'>
        <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope='col'>Status</th>
              <th scope='col'>action</th>
            </tr>
          </thead>
          <tbody>
            {
                data && data.map((value,index)=>{
                    return(
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.mobile}</td>
                            <td><button className='btn btn-success' onClick={()=>statushandle(value.id)}>{value.status}</button></td>
                            <td>
                            <button className='btn btn-primary'>view</button>
                                <button className='btn btn-danger'>delete</button>
                            </td>
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
        </div>
      <Afooter/>
    </div>
  )
}

export default Usermange
