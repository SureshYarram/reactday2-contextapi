import { createContext, useReducer } from "react"






  
       const initState = {
         
        name:"",
        age:"",
        date_of_birth:"",
        states:"",
        address:"",
        pincode:"",

       }

       const reducer = (state,action)=>{
           switch(action.type){
               case "ADD_NAME":
                return {...state, name:action.payload} 
                case "ADD_AGE":{
                 return {...state, age:action.payload} 
                }  
                case "ADD_DATEOFBIRTH":
                    return {...state, date_of_birth:action.payload} 
                    
                 case "ADD_STATE":
                   return  {...state, states:action.payload}
                   case "ADD_ADDRESS":
                 return  {...state,  address:action.payload}
                 case "ADD_PINCODE":
                 return  {...state, pincode:action.payload}
           }
       }

  export const SignUpContext = createContext();


  export function SignUpContextProvider({children}){

    const [state,dispatch] =    useReducer(reducer,initState);

    const {name,age, date_of_birth,states,address,pincode} = state;

    return( <SignUpContext.Provider value = {{name,age,date_of_birth,states,address,pincode,dispatch}}>{children}</SignUpContext.Provider>)
  }

