import axios from "axios"
import { useEffect, useState } from "react"



export const Users = ()=>{

    const [data,setData] = useState([])

    useEffect(()=>{
        GetData()
    },[])
     const GetData = ()=>{
      axios.get("http://localhost:8080/users").then((res)=>{
             setData(res.data)
      })

     }

    return(

       <div>
            
            {data.map((el)=>(
                        <div key = {el.id}>{el.id}  {el.name} {el.age} {el.date_of_birth} {el.states} {el.address} {el.pincode}</div>

            ))}

       </div>
    )

}