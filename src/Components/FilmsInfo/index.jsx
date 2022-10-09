import { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import TableData from "../dummyComponents/TableData";
import "./styles.css"

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


    return ( 
       
       <div className="container" style={{flexDirection:"column"}}>
            <h1>{data.title}</h1>
            <p>{data.opening_crawl}</p>
            <table className="table-info">
                <thead>
                    <tr>
                        <th colSpan={2}>Information</th>
                    </tr>
                </thead>
                <tbody>
                    <TableData name="episode" data={data.episode_id}></TableData>
                    <TableData name="director" data={data.director}></TableData>
                    <TableData name="producer" data={data.producer}></TableData>
                    <TableData name="release date" data={data.release_date}></TableData>
                </tbody>
            </table>
       </div>
    );
}

export default FilmsInfo;