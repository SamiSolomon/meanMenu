import React, { useContext } from 'react'
import styled from 'styled-components/native';
import {  FlatList, View,TouchableOpacity } from "react-native";

import { SafeArea } from '../../../components/utility/safe-area.components';
import { ActivityIndicator } from 'react-native-paper';

import { Search } from '../component/search.component';
import { RestaurantInfo } from '../component/restaurant-info.component';
import { Spacer } from '../../../components/spacer/spacer.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';


const RestaurantList =styled(FlatList).attrs({  
   contentContainerStyle: {padding: 16}
})``

export const RestaurantsScreen = ({navigation}) => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext)
  const { favorites } = useContext(FavoritesContext)

    return (
        <SafeArea>
         {isLoading &&  
         <View style={{position:"absolute", top:"50%", left:"50%" }}>
          <ActivityIndicator
          size={50}
          style={{marginLeft: -25}}
          animating={true}
           />
         </View> }
          <Search />
        <RestaurantList 
            data={restaurants}
            renderItem={({item})=>{
              return (
                  <TouchableOpacity onPress={()=> navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })} >
                        <Spacer position="bottom" size="small">
                          <RestaurantInfo restaurant={item} /> 
                        </Spacer> 
                  </TouchableOpacity>
                    )}}
            keyExtractor={(item)=>item.name}
          />
      </SafeArea>
    );
}


