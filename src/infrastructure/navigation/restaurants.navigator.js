import React from "react"

import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantScreen"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

import { RestaurantDetailScreen } from "../../features/restaurants/screens/Restaurants-detail.screen"

const RestaurantStack = createStackNavigator();


export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{...TransitionPresets.ModalPresentationIOS}} >
            <RestaurantStack.Screen  
                name="Restaurants"
                component={ RestaurantsScreen }
                options={{ headerShown: false }}
            />
            <RestaurantStack.Screen
             name="RestaurantDetail"
             component={ RestaurantDetailScreen } 
             />

        </RestaurantStack.Navigator>
    )

}