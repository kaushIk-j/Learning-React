import React,{useContext,createContext, useState} from "react"

export const MyContext = createContext({
    userData :[{
        id:0,
        name:"",
        post:""
    }],

    addUser : (userData)=>{},
    updateUser : (id,userData)=>{},
    deleteUser : (id)=>{},
    updatePost : (id,userData)=>{}
})

export const MyContextProvider = ({children})=>{

    const[user,setUser] = useState([])
    

}

export const useMyContext=()=>{
    return useContext(MyContext)
}
