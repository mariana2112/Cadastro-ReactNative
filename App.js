import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import AppCadastro from './src/pages/cadastro';
import StackNavigation from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation></StackNavigation>
    </NavigationContainer>
  );
}
