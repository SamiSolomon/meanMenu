import {mocks, mockImages } from "../mocks/index"
import camelize from "camelize";



export const restaurantsRequest = (loc) =>{
    return new Promise((resolve, reject)=> {
        const mock = mocks[loc];
        if(!mock){
            reject('not found')
        }
          resolve(mock)

    })}

    export const restaurantsTransform = ({ results = [] }) => {
        const mappedResults = results.map((restaurant) => {
            restaurant.photos = restaurant.photos.map(() => {
                const randomIndex = Math.floor(Math.random() * mockImages.length);
                return mockImages[randomIndex];
            });
            return {
                ...restaurant,
                address: restaurant.vicinity,
                isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
                isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
            };
        });
        return camelize(mappedResults);
    };

   