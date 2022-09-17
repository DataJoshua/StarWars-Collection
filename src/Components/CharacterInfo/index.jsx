import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import TableData from '../dummyComponents/TableData'
import "./styles.css"

function CharacterInfo() {
    let {id} = useParams()

    let [data, setData] = useState({})


    useEffect(()=>{
        const makeApiCall = async ()=>{
            let f = await fetch(`https://swapi.dev/api/people/${id}`)
            let res  = await f.json()
            setData(res)
            
           
        }
        makeApiCall()


    }, [])

 









  

console.log(data);
    return ( 
        <div className="container">
            <h1>{data.name}</h1>
           <table className='table-info'>
                <tr>
                    <th colSpan={2}>Information</th>
                </tr>
                <TableData name="height" data={data.height}></TableData>
                <TableData name="mass" data={data.mass}></TableData>
                <TableData name="hair color" data={data.hair_color}></TableData>
                <TableData name="skin color" data={data.skin_color}></TableData>
                <TableData name="eye color" data={data.eye_color}></TableData>
                <TableData name="gender" data={data.gender}></TableData>
                <TableData name="skin color" data={data.skin_color}></TableData>
                <TableData name="skin color" data={data.skin_color}></TableData>
           </table>
        </div>
    );
}

export default CharacterInfo;