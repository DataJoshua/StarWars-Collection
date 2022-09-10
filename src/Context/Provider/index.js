import { useEffect, useState } from "react";
import MyContext from "../SWContext";

function StarWarsProvider({children}) {

    const [data,setData] = useState([])

    const makeInternalApiCall = async (url)=>{
        let js = await fetch(url)
        let res = await js.json()
        setData(res)

    }

    const makeApiCall = async (url)=>{
        let js = await fetch(url)
        let res = await js.json()
        return res

    }


    useEffect(()=>{
        makeInternalApiCall("https://swapi.dev/api/people")
    }, [])

    return ( 
    <MyContext.Provider value={{data, makeApiCall}}>
        {children}
    </MyContext.Provider> 
    );
}

export default StarWarsProvider;