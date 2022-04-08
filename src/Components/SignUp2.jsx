import { useContext } from "react";
import { SignUpContext } from "../Context/SignUpContext";
import axios from "axios"
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";



export const SignUp2 = ()=>{

     
    const navigate = useNavigate()

    const {name,age,date_of_birth,states,address,pincode,dispatch} = useContext(SignUpContext);
          
    if(!name||!age||!date_of_birth){
        return <Navigate to="/registration/one"/>
    }

    const HandleSubmit = ()=>{

          axios.post("http://localhost:8080/users",{
              name:name,
              age:age,
              date_of_birth:date_of_birth,
              states:states,
              address:address,
              pincode:pincode
          })
    }
    
   return(

       <div>

           <form>
               <input type="text" placeholder="enter your state" value={states} onChange={(e)=>dispatch({type:"ADD_STATE", payload:e.target.value})}/>
               <input type="text" placeholder="enter your address" value={address}  onChange={(e)=>dispatch({type:"ADD_ADDRESS", payload:e.target.value})}/>
               <input type="text" placeholder="enter you pincode" value={pincode} onChange={(e)=>dispatch({type:"ADD_PINCODE", payload:e.target.value})} />
        
           </form>

           <button disabled={!states||!address||!pincode} onClick={HandleSubmit} >Submit</button>
           <br /><br /><br /><br />


           <button onClick={()=>navigate("/users")} >Registered Users</button>
             
       </div>
   )


}