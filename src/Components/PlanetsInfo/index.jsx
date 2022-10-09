import { useState , useEffect} from "react"
import {useParams} from 'react-router-dom'
import TableData from "../dummyComponents/TableData"
import TableDataFromUrl from "../dummyComponents/TableDataFromUrl"
import planet1 from "../../Assets/imgs/planet1.jpg"
import images from "../../Assets/imgs/images"
import "./styles.css"

function PlanetsInfo() {

    const [data, setData] = useState([])
    const {id} = useParams()

    const [residents, setResidents] = useState([])
 
    const makeApiCall = async (url)=>{
        let s = await fetch(url)
        let res = await s.json()
        setData(res) 
        setResidents(res.residents);
    }

    useEffect(()=>{
        makeApiCall(`https://swapi.dev/api/planets/${id}/`)
    
    }, [])


    
    
    return (
        <>
            

            <div className="container">
            

                <div>
                    <h1>{data.name}</h1>
 
                    <div className="planet-img" style={{
                        backgroundImage: `url(${images[id-1]})`,
                        backgroundSize:"cover",
                        backgroundPosition: "center",
                        width: 500,
                        height: 500

                    }}>
                    </div>         
                </div>
              

                <div className="table-container">

                        <table className="table-info"> 
                            <thead>
                                <tr>
                                    <th colSpan={2}>Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableData name="rotation period" data={data.rotation_period}></TableData>
                                <TableData name="orbital period" data={data.orbital_period}></TableData>
                                <TableData name="diameter" data={data.diameter}></TableData>
                                <TableData name="climate" data={data.climate}></TableData>
                                <TableData name="gravity" data={data.gravity}></TableData>
                                <TableData name="terrain" data={data.terrain}></TableData>
                                <TableData name="surface water" data={data.surface_water}></TableData>
                                <TableData name="population" data={data.population}></TableData>
                                
                            </tbody>
                            
                        </table>

                        <div style={{display: "grid", alignItems:"center", gap: 50}}>

                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Residents</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {residents?.map((val, index)=>{
                                        return <TableDataFromUrl key={index} url={val} type="characters" dataInput="name"></TableDataFromUrl>
                                    })}
                                </tbody>
                            </table>

                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>This planet appears in</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.films?.map((val, index)=>{
                                        return <TableDataFromUrl key={index} url={val} type="films" dataInput="title"></TableDataFromUrl>
                                    })}
                                </tbody>
                            </table>
                        </div>
                </div>



            </div> 
        </>
    );
}

export default PlanetsInfo;