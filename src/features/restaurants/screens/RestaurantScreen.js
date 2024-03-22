import React from 'react'
import styled from 'styled-components/native';
import {
    FlatList,
  } from "react-native";
import { SafeArea } from '../../../components/utility/safe-area.components';

import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from '../component/restaurant-info.component';
import { Spacer } from '../../../components/spacer/spacer.component';


const RestaurantList =styled(FlatList).attrs({  
   contentContainerStyle: {padding: 16}
})`

`

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
          <Searchbar placeholder="Search" />
        <RestaurantList 
            data={[{name:1},{name:2},{name:3} ,{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name:10},{name:11},{name:12},{name:13},{name:14}]}
            renderItem={()=> <Spacer position="bottom" size="small">
                                <RestaurantInfo /> 
                            </Spacer> }
            keyExtractor={(item)=>item.name}
          />
      </SafeArea>
    );
}


