import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const BreedItem = ({ breed, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: `https://dog.ceo/api/breed/${breed.name}/images/random` }} style={{ width: 50, height: 50 }} />
        <Text style={{ fontSize: 16, marginLeft: 10 }}>{breed.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BreedItem;
