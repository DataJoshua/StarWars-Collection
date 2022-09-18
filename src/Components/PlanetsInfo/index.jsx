import { useState , useEffect} from "react"
import {useParams} from 'react-router-dom'
import TableData from "../dummyComponents/TableData"
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

    return (
        <div className="container">
            <h1>{data.name}</h1>
            <table className="table-info"> 
                <tr>
                    <th colSpan={2}>Information</th>
                </tr>
                <TableData name="rotation period" data={data.rotation_period}></TableData>
                <TableData name="orbital period" data={data.orbital_period}></TableData>
                <TableData name="diameter" data={data.diameter}></TableData>
                <TableData name="climate" data={data.climate}></TableData>
                <TableData name="gravity" data={data.gravity}></TableData>
                <TableData name="terrain" data={data.terrain}></TableData>
                <TableData name="surface water" data={data.surface_water}></TableData>
                <TableData name="population" data={data.population}></TableData>
                
            </table>

        </div> 
    );
}

export default PlanetsInfo;