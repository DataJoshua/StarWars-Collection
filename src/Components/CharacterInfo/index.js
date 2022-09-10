import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';

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
    })
    



    return ( 
    
        <>
           <h1>{data.name}</h1>
          
        </> 
    );
}

export default CharacterInfo;