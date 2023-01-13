import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppCadastro from '../pages/cadastro';
import Lista from '../pages/lista';
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AppCadastro}
        options={{
          headerStyle: {
            backgroundColor: '#9c3b3b',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Lista"
        component={Lista}
        options={{
          headerStyle: {
            backgroundColor: '#9c3b3b',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}
