import React from 'react'
import styled from 'styled-components/native';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
  } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from '../component/restaurant-info.component';

const SafeArea =styled(SafeAreaView)`
    flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`}`

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
        <View>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.container}>
           <RestaurantInfo /> 
        </View>
      </SafeArea>
    );
}



const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
    },
  });

