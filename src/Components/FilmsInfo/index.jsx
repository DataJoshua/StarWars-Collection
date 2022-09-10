import { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function FilmsInfo() {

    let {id} = useParams();
    
    let [data, setData] = useState({});
    

    const makeApiCall = async (url)=>{
        let resjson = await fetch(url)
        let res = await resjson.json()
        setData(res)
    }

    useEffect(()=>{
        makeApiCall(`https://swapi.dev/api/films/${id}`)
    }, [])


    return ( <h1>{data.title}</h1> );
}

export default FilmsInfo;