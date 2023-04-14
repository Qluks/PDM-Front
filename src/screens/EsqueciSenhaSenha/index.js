import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import Logo from '../../assets/Logo.png';
import { Button } from '@rneui/themed';
import Constants from 'expo-constants';


export default function EsqueceuSenha ({navigation}){

    
  
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={Logo} />

                <TextInput
                    style={styles.inputForm}
                    placeholder="Senha"
                    secureTextEntry={true}
                />

                <TextInput
                    style={styles.inputForm}
                    placeholder="Senha"
                    secureTextEntry={true}
                />

                <Button
                    onPress={() => navigation.reset({
                        index:0,
                        routes: [{name: 'Login'}]
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
    },
    logo: {
        height: 200,
        width: 200,
        marginLeft: 95,
        marginTop: 22,
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
    
});