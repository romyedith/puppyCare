import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import Encabezado from '../components/Header';

const BreedDetailsScreen = ({ route }) => {
  const { breedId } = route.params;
  const [breedDetails, setBreedDetails] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchBreedDetails();
    fetchImages();
  }, []);

  const fetchBreedDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.thedogapi.com/v1/breeds/${breedId}`,
        {
          headers: {
            'x-api-key': 'live_u6QGy4G9Q3jHC0nwB10uNcI0DSkgO3E4LtUbDTpvRGFnTi1QG9q3ypE1zfQB09ZY',
          },
        }
      );
      setBreedDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.thedogapi.com/v1/images/search?breed_id=${breedId}&limit=5`,
        {
          headers: {
            'x-api-key': 'live_u6QGy4G9Q3jHC0nwB10uNcI0DSkgO3E4LtUbDTpvRGFnTi1QG9q3ypE1zfQB09ZY',
          },
        }
      );
      setImageUrls(response.data.map((image) => image.url));
    } catch (error) {
      console.error(error);
    }
  };

  if (!breedDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Encabezado />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.carouselContainer}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            showsPagination={false}
            loop={true}
            horizontal={true}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
          >
            {imageUrls.map((url, index) => (
              <View key={index} style={styles.slide}>
                <Image
                  source={{ uri: url }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Raza:</Text>
          <Text style={styles.value}>{breedDetails.name}</Text>
          <Text style={styles.title}>Características:</Text>
          <Text style={styles.value}>
            Tamaño {breedDetails.height.metric} cm, peso{' '}
            {breedDetails.weight.metric} kg.
          </Text>
          <Text style={styles.title}>Temperamento:</Text>
          <Text style={styles.value}>{breedDetails.temperament}</Text>
          <Text style={styles.title}>Historia:</Text>
          <Text style={styles.value}>{breedDetails.bred_for}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  carouselContainer: {
    height: 300,
    marginVertical: 20,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gray',
  },
  buttonText: {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default BreedDetailsScreen;
