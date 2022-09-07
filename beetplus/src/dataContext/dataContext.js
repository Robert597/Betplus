import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext({});


export const DataProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
     const fetchData = async () => {
        try{
            setLoading(true);
            const response = await axios.get("https://betplussoccer.herokuapp.com/data");
            console.log(response?.data);
            setData(response.data);
        }catch(err){
console.log(err.message);
        }finally{
            setLoading(false);
        }
     }
     fetchData();
    }, [])
    
    return (
        <DataContext.Provider value={{loading, data}}>

            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
