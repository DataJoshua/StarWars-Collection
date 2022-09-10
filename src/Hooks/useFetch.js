import { useEffect, useRef, useState } from "react"

const useFetch = async (url)=>{
    
    const [data, setData] = useState([])
    
   
    useEffect(()=>{
        const makeApiCall = async (url)=>{
            const f = await fetch(url)
            const res = await f.json()
            setData(res)
        }

        makeApiCall(url)
    },[url])

    return data
}

export default useFetch