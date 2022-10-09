import { useEffect, useState , useRef} from "react";
import { Link } from "react-router-dom";

function TableDataFromUrl({url, type, dataInput}){

    const [data, setData] = useState({});
    let [id, setId] = useState("")

    const makeApiCall = async (urlParam)=>{
        let s = await fetch(urlParam)
        console.log("resolviendo");
        let res = await s.json()
        setData(res) 
        setId(res.url?.split("/")[5])
        console.log("fnished");
        
    }


    
    useEffect(()=>{
        makeApiCall(url);
        
    }, [])



    return (
        <tr>
           <td><Link to={`/collections/${type}/${id}`}>{data[dataInput]}</Link></td>
        </tr>
    )
}

export default TableDataFromUrl;