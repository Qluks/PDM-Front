import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Button } from '@rneui/themed';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import Logo from '../../assets/Logo.png';


export default function Login ({navigation}){

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
        return(
            <View style={styles.container}>

                <View style={styles.container1}>
                    <View style={styles.viewUp}>
                        <Text style={styles.textLogin}>Login</Text>
                        <Icon name='person' color='#FFFFFF' style={styles.icon}/>
                    </View>
                    <View>
                        <Text style={styles.textBemVindo}>Bem Vindo!</Text>
                    </View>
                </View>
            
                <View style={styles.container2}>
                    <Image style={styles.logo} source={Logo} />
                    <TextInput 
                        style={styles.inputForm}
                        placeholder="Email"
                        placeholderTextColor={"#BBBBBB"}
                    />
                    <TextInput
                        style={styles.inputForm}
                        placeholder="Senha"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Text style={showPassword ? styles.hideText : styles.showText}>
                            {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.text} onPress={() => navigation.navigate("Recuperar")} >Esqueceu a senha?</Text>
                </View>

                <View style={styles.container3}>
                    <Button
                        onPress={() => navigation.reset({
                            index:0,
                            routes: [{name: 'Catalogo'}]
                        })}
                        title="Login"
                        buttonStyle={{
                            backgroundColor: '#190152',
                            borderRadius: 12,
                        }}      
                        containerStyle={{
                            width: 339,
                            height: 55,
                            marginLeft: 24,
                            fontSize: 18,   
                        }}
                        titleStyle={{ color: 'white', fontSize:18, paddingVertical: 5}}
                    />
                    <Text style={styles.cadastro} onPress={() => navigation.navigate('Cadastro')} >Ainda não é cadastrado? Crie uma conta</Text>
                </View>

            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#15141F',
        padding: 8, 
    },container1: {
        flexDirection: 'column',
    },
    viewUp: {
        flexDirection: 'row',
    },
    textLogin: {
        color: '#FFFFFF',
        marginTop: 39,
        marginLeft: 24,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textBemVindo: {
        marginTop: 20,
        marginLeft: 24,
        fontSize: 13,
        color: '#FFFFFF',
    },
    icon: {
        marginTop: 41,
        marginLeft: 5,
    },
    container2: {
        flexDirection: 'column',
    },
    logo: {
        height: 200,
        width: 200,
        marginLeft: 95,
        marginTop: 12,
        marginBottom: 51,
        borderRadius: 200/2,
    },
    inputForm: {
        height: 48,
        width: 339,
        backgroundColor: '#ddddff',
        marginLeft: 24,
        marginBottom: 18,
        borderRadius: 20,
        paddingLeft: 21,
    },
    text: {
        color: '#4285F4',
        marginLeft: 242,
        marginBottom: 36,
    },   
     container3: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    cadastro:{
        color: '#FFFFFF',
        marginLeft: 65,
        marginTop: 33,
    }, 
     hideText: {
        marginLeft:30,
        color: 'white',
      },
      showText: {
        marginLeft:30,
        color: 'green',
      },
  });