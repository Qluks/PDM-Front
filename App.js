import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Catalogo from './src/screens/Catálogo';
import Favoritos from './src/screens/Favoritos';
import Perfil from './src/screens/Perfil';
import {Ionicons} from '@expo/vector-icons'




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabNavigator() {
  return (
    <Tab.Navigator>

      <Tab.Screen 
        name="Home" 
        component={Catalogo}
        options={{
          tabBarIcon:({color, size, focused}) =>{
            if(focused){
              return <Ionicons name="home" size={size} color={color} />
            }

            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen 
        name="Favoritos" 
        component={Favoritos}
        options={{
          tabBarIcon:({color, size, focused}) =>{
            if(focused){
              return <Ionicons name="star" size={size} color={color} />
            }

            return <Ionicons name="star-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          tabBarIcon:({color, size, focused}) =>{
            if(focused){
              return <Ionicons name="person" size={size} color={color} />
            }

            return <Ionicons name="person-outline" size={size} color={color} />
          }
        }}
      />
        
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#15141F',
          },
        }}
      >


        <Stack.Screen 
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Cadastro"
          component={Cadastro}
        />   

        <Stack.Screen 
          name="Catalogo"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



