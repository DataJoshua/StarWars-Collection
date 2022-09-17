import { useState , useEffect} from "react"
import {useParams} from 'react-router-dom'
function PlanetsInfo() {

    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const makeApiCall = async ()=>{
            let f = await fetch(`https://swapi.dev/api/planets/${id}`)
            let res  = await f.json()
            setData(res)
        }
        makeApiCall()
    })

    return ( <h1>{data.name}</h1> );
}

export default PlanetsInfo;