import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Title = styled.Text`
font-family: ${(props)=>props.theme.fonts.heading};
font-size: ${(props)=>props.theme.fontSizes.body};
padding:  ${(props)=> props.theme.space[3]};
color: ${(props)=> props.theme.colors.ui.error}`

const RestaurantCard = styled(Card)`
background-color: white;
margin: 3px `

const Info = styled(View)`
padding: ${(props)=> props.theme.space[3]};`

const Address = styled(Text)`
font-family: ${(props)=> props.theme.fonts.body};`


const RestaurantCover = styled(Card.Cover)`
padding: 8px;
backgroundColor: white;`

export const RestaurantInfo = ({restaurant={}}) =>{
    const {
        name ="Some Restaurant",
        photos = ['https://picsum.photos/700',],
        address = "canada",
        rating= 4,
    
    }= restaurant;
    
    return(
          <RestaurantCard elevation={5} >
            <RestaurantCover key={name} source={{uri:photos[0]}} />
            <Info>
            <Title>{name}</Title>
            <Address>{address}</Address>
            </Info>
          </RestaurantCard>);
}
