import { useContext } from "react"
import { useNavigate } from "react-router"
import { SignUpContext } from "../Context/SignUpContext"




export const SignUp1 = ()=>{
    
    const navigate = useNavigate();

    const {name,age, date_of_birth,dispatch} = useContext(SignUpContext)
     console.log(name);
    return(

        <div>

            <form>
                <input type="text" placeholder="enter your name" value={name} onChange={(e)=>dispatch({type:"ADD_NAME", payload:e.target.value})}/>
                <input type="text" placeholder="enter your age" value={age}  onChange={(e)=>dispatch({type:"ADD_AGE", payload:e.target.value})}/>
                <input type="date" placeholder="enter you date_of_birth" value={date_of_birth} onChange={(e)=>dispatch({type:"ADD_DATEOFBIRTH", payload:e.target.value})} /> 
            </form>
               <button disabled={!name||!age||!date_of_birth}  onClick={()=>navigate("/registration/two")}>Next</button>
        </div>
    )

}