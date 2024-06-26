import React, { useState, useEffect ,useContext } from "react";
import { Searchbar } from "react-native-paper";
import  styled from "styled-components/native"
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    marginTop: ${(props)=>props.theme.sizes[2]};
    marginBottom: -${(props)=>props.theme.sizes[1]};
    position: absolute;
    z-index: 999;
    top: 20px;
    width:100%;
    `
export const Search = () => {
   const { keyword, search} = useContext(LocationContext);
   const [searchKeyword, setSearchKeyword] = useState(keyword)
   
   useEffect(()=>{
    setSearchKeyword(keyword)
   },[keyword])

    return (
    <SearchContainer>
        <Searchbar 
            placeholder="Search for places"
            icon="map"
            value={searchKeyword}
            onSubmitEditing={()=>{
                search(searchKeyword)
            }}
            onChangeText={(text)=>
                setSearchKeyword(text)
            }
        />
    </SearchContainer>
)}