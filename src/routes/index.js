import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppCadastro from '../pages/cadastro';
import Lista from '../pages/lista';
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AppCadastro} />
      <Stack.Screen name="Pag2" component={Lista} />
    </Stack.Navigator>
  );
}
