import React, { useState, useEffect, createContext } from "react";

import { locationRequest, locationTransform } from "./location.service"

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword ] = useState("chicago")
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword)=>{
        setIsLoading(true);
        setKeyword(searchKeyword)};
        
        useEffect(()=>{
            if(!keyword.length){
                return(console.log("not founded"))
            }
            locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
            })
            .catch((err)=>{
                setIsLoading(false)
                setError(err)
            })
        },[keyword])
  
    return (
        <LocationContext.Provider value = {{ 
        isLoading:isLoading,
        error:error,
        location:location,
        search: onSearch ,
        keyword:keyword,
        }}>
            { children }
        </LocationContext.Provider>
    ) 
}