import React from 'react';
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star';
import open from '../../../../assets/open';

import { Favorites } from '../../../components/favorites/favorites.component.js';
import { Text } from '../../../components/typography/text.components';
import {
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Address,
  } from './restaurant-info-card.styles.js';
import { Spacer } from '../../../components/spacer/spacer.component.js';


export const RestaurantInfo = ({restaurant={item}}) =>{
    const {
        name ="Jonathan Restaurant",
        photos = ['https://picsum.photos/700',],
        address = "canada",
        rating= 4,
        isOpenNow= true,
        isClosedTemporarily= true,
        placeID,
    }= restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)))
    
    return(
          <RestaurantCard elevation={5} >
          
            <Favorites restaurant={restaurant} />

            <RestaurantCardCover key={name} source={{uri:photos[0]}} />
            <Info>
            <Text variant="label" >{name}</Text>
            <Section>
               <Rating>
                   {ratingArray.map((_,i)=> (
                   <SvgXml key={`star-${placeID}-${i}`} xml={star} width={20} height={20} />
                  ))}
               </Rating>
               <SectionEnd>
                  {isClosedTemporarily && (
                  <Text variant="error" >
                    CLOSED TEMPORARILY
                  </Text>
                  )}
                  <Spacer position='left' size='medium' >
                        {isOpenNow && <SvgXml  xml={open} width={20} height={20} />}
                  </Spacer>
               </SectionEnd>
            </Section>
            <Address>{address}</Address>
            </Info>
          </RestaurantCard>);
}
