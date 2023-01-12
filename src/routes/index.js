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
            backgroundColor: '#2E8B57',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Lista"
        component={Lista}
        options={{
          headerStyle: {
            backgroundColor: '#2E8B57',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}
