import React from 'react';
import { Image } from 'react-native';

const BreedCarouselItem = ({ item }) => {
  return (
    <Image source={{ uri: item }} style={{ width: 200, height: 200, resizeMode: 'cover', borderWidth: 1, borderColor: 'black' }} />
  );
};

export default BreedCarouselItem;
