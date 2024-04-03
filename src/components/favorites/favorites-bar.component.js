import React from "react";
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "../typography/text.components"


const FavoritesWrapper = styled.View`
padding: 2px; `

  
export const FavoritesBar = ({ favorites, onNavigate }) => {

    if (!favorites.length){
        return null;
    }
    return (

    <FavoritesWrapper>
        <Spacer variant="left.large">
            <Text variant="caption"> Favorites</Text>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favorites.map((restaurant)=> {
                const key = restaurant.name;
                return (
                    <Spacer key={key} position="left" size="small"  >
                       <TouchableOpacity onPress={()=>onNavigate("RestaurantDetail",{
                        restaurant,
                       })}>
                              <CompactRestaurantInfo restaurant={restaurant} />
                       </TouchableOpacity>
                    </Spacer>
                )
            })}
        </ScrollView>
    </FavoritesWrapper>

 )}