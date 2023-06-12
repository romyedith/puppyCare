import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import Encabezado from '../components/Header';

const HomeScreen = ({ navigation }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/breeds', {
        headers: {
          'x-api-key': 'live_u6QGy4G9Q3jHC0nwB10uNcI0DSkgO3E4LtUbDTpvRGFnTi1QG9q3ypE1zfQB09ZY',
        },
      });
      setBreeds(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Encabezado />
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/perrito1.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedBreed(value)}
          items={breeds.map((breed) => ({ label: breed.name, value: breed.id }))}
          style={{
            inputIOS: styles.dropdownInput,
            inputAndroid: styles.dropdownInput,
            iconContainer: styles.dropdownIconContainer,
            viewContainer: styles.dropdownContainer,
            modalViewBottom: styles.dropdownModalViewBottom,
            modalViewTop: styles.dropdownModalViewTop,
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Search"
          onPress={() => navigation.navigate('BreedDetails', { breedId: selectedBreed })}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  pickerContainer: {
    marginTop: -100, // Ajusta este valor para mover el componente de selección hacia arriba
    paddingHorizontal: 20,
  },
  dropdownContainer: {
    marginTop: 100,
    zIndex: 1,
  },
  dropdownInput: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  dropdownIconContainer: {
    top: 12,
    right: 10,
  },
  dropdownModalViewBottom: {
    justifyContent: 'flex-end',
  },
  dropdownModalViewTop: {
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
