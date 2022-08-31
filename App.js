import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Disciplinas from './src/pages/disciplinas';
import NovaDisciplina from './src/pages/novaDisciplina';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Disciplinas'>
        <Stack.Screen name="Disciplinas" component={Disciplinas} />
        <Stack.Screen name="Nova Disciplina" component={NovaDisciplina} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
