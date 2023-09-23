import { useState} from "react";

function fetchInicio(props){
    const [data,setData] = useState([]);//creamos un estado
    fetch(props)
        .then((response)=>{
            if(!response.ok){
                console.log("no hubo respuesta");
                return res.send(response)
            }
            return response.json()
        })
        .then((datos)=>setData(datos.results))

        return data
}

export default fetchInicio;