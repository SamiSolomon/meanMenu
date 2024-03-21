import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star';
import open from '../../../../assets/open';

import { Text } from '../../../components/typography/text.components';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Icon,
    Address,
  } from './restaurant-info-card.styles.js';


export const RestaurantInfo = ({restaurant={}}) =>{
    const {
        name ="Jonathan Restaurant",
        photos = ['https://picsum.photos/700',],
        address = "canada",
        rating= 4,
        isOpenNow= true,
        isClosedTemporarily= true,
        id=1,
    }= restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)))
    
    return(
          <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{uri:photos[0]}} />
            <Info>
            <Text variant="label" >{name}</Text>
            <Section>
               <Rating>
                   {ratingArray.map(()=> (
                   <SvgXml key={id} xml={star} width={20} height={20} />
                  ))}
               </Rating>
               <SectionEnd>
                  {isClosedTemporarily && (
                  <Text variant="error" >
                    CLOSED TEMPORARILY
                  </Text>
                  )}
                  <Spacer position='left' size='medium'>
                  {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                  </Spacer>
               </SectionEnd>
            </Section>
            <Address>{address}</Address>
            </Info>
          </RestaurantCard>);
}
