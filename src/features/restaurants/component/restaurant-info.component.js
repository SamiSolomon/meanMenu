import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star';
import open from '../../../../assets/open';


import {Text, View } from 'react-native';
import { Card } from 'react-native-paper';

const Title = styled.Text`
font-family: ${(props)=>props.theme.fonts.heading};
font-size: ${(props)=>props.theme.fontSizes.body};
padding:  ${(props)=> props.theme.space[0]};
color: ${(props)=> props.theme.colors.ui.error}`

const RestaurantCard = styled(Card)`
background-color: white;
margin: 8px `

const Rating= styled.View`
flex-direction: row;
padding:${(props) =>props.theme.space[1]}`

const Info = styled(View)`
padding: ${(props)=> props.theme.space[1]};
margin-left: ${(props)=> props.theme.sizes[1]}`

const Address = styled(Text)`
font-family: ${(props)=> props.theme.fonts.body};
padding:   ${(props)=> props.theme.space[0]}`


const RestaurantCover = styled(Card.Cover)`
padding: ${(props)=> props.theme.space[1]};
backgroundColor: white;`

const Section= styled.View`
flex-direction: row;
align-items: center;`

const SectionEnd= styled.View`
flex: 1;
flex-direction: row;
justify-content: flex-end`

export const RestaurantInfo = ({restaurant={}}) =>{
    const {
        name ="Some Restaurant",
        photos = ['https://picsum.photos/700',],
        address = "canada",
        rating= 4,
        isOpenNow= true,
        isClosedTemporarily= true,
    }= restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)))
    
    return(
          <RestaurantCard elevation={5} >
            <RestaurantCover key={name} source={{uri:photos[0]}} />
            <Info>
            <Title>{name}</Title>
            <Section>
               <Rating>
                   {ratingArray.map(()=> (
                   <SvgXml key={name} xml={star} width={20} height={20} />
                  ))}
               </Rating>
               <SectionEnd>
               {isClosedTemporarily && (
                <Text variant="label" style={{ color: 'red'}}>
                  CLOSED TEMPORARILY
                </Text>
               )}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
               </SectionEnd>
            </Section>
            <Address>{address}</Address>
            </Info>
          </RestaurantCard>);
}
