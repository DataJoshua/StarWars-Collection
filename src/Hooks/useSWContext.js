import { useContext } from "react"
import MyContext from "../Context/SWContext"

const useSWContext = ()=>{
    
    return useContext(MyContext)
    
} 

export default useSWContext;