import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const Service = () => {
    const [data, setData]=useState()

    const {id} = useParams()
    
    const services = useLoaderData()
   
    useEffect(()=>{
        const searchService = services.find(Service=>Service.id==id)
       setData(searchService)
    },[services,id])
    
    return (
        <div>
            <div>
                
                <ServiceCard data={data} ></ServiceCard>
            </div>
        </div>
    );
};

export default Service;