import { View, StyleSheet, StatusBar } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Catalogo from './src/screens/Catálogo';
import Favoritos from './src/screens/Favoritos';
import Perfil from './src/screens/Perfil';
import EsqueceuEmail from './src/screens/EsqueciSenhaEmail';
import EsqueceuSenha from './src/screens/EsqueciSenhaSenha';
import Detalhamento from './src/screens/Detalhamento';
import Noticia from './src/screens/noticia';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabNavigator() {
  return (

    <Tab.Navigator 
    initialRouteName="Home"
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#15141F',
            paddingBottom: 10,
          },
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#15141F',
          },
        }}
    >

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
            name="Noticia" 
            component={Noticia}
            options={{
              tabBarIcon:({color, size, focused}) =>{
                if(focused){
                  return <Ionicons name="newspaper" size={size} color={color} />
                }

                return <Ionicons name="newspaper-outline" size={size} color={color} />
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
      <StatusBar backgroundColor='#15141F' barStyle="light-content" />

      <Stack.Navigator>

        <Stack.Screen 
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Cadastro"
          component={Cadastro}
          options={{
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#15141F',
            },
          }}
        /> 

        <Stack.Screen 
          name="Esqueceu a Senha"
          component={EsqueceuEmail}
          options={{
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#15141F',
            },
          }}
        />  

        <Stack.Screen 
          name="Recuperar Senha"
          component={EsqueceuSenha}
          options={{
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#15141F',
            },
          }}
        /> 

        <Stack.Screen 
          name="Catalogo"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Detalhes"
          component={Detalhamento}
          options={({ route }) => ({ headerTitle: route.params.item.titulo })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
