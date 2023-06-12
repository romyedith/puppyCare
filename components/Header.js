import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class Encabezado extends Component {
  render() {
    return (
      <Header
        placement="center"
        centerComponent={{ text: 'Puppy Care', style: { color: '#fff' } }}
        containerStyle={{ backgroundColor: '#F44336', position: 'absolute', top: 0, width: '100%' }} // Ajusta el color de fondo, la posición y el ancho aquí
      />
    );
  }
}