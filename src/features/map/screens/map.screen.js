import React, { useContext, useState, useEffect} from 'react';
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components/native"

import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import { Search } from "../components/search.component"
import { MapCallout } from './map-callout.component';

const Map = styled(MapView)`
height:100%;
width: 100%; `

export const MapScreen = ({ navigation }) =>{
const { location } = useContext(LocationContext)
const { restaurants = [] } = useContext(RestaurantsContext)
const [latDelta, SetLatDelta] = useState(0)

const { lat, lng, viewport } = location

useEffect(()=>{
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    SetLatDelta(northeastLat - southwestLat)
}, [location, viewport])

return (
    <>
    <Search />
    <Map
    region={{
        latitude:lat,
        longitude:lng,
        latitudeDelta: latDelta,
        longitudeDelta: 0.02,
    }}>
        {restaurants.map((restaurant)=> {
            return <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
            }}
              > 
              <Callout onPress={()=> navigation.navigate("RestaurantDetail", {
                restaurant: restaurant,
              })}>
                <MapCallout restaurant={restaurant} />
              </Callout>
              </Marker>
        })}
    </Map>
 </> 
)
}

