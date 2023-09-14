import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Screens/Home/Home';
import Contact from './src/Screens/Contact/Contact';
import Menu from './src/Screens/Menu/Menu';
import Perfil from './src/Screens/Perfil/Perfil';

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name='home-outline' color={color} size={size}/>
            }
          }}

        />
        <Tab.Screen 
        name="Contato" 
        component={Contact} 
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='call-outline' color={color} size={size}/>
          }
        }}
        />
        <Tab.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='person-circle-outline' color={color} size={size}/>
          }
        }}
        />
        <Tab.Screen 
        name="Menu" 
        component={Menu} 
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='menu-outline' color={color} size={size}/>
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}