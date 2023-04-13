import React from "react";
import { View, StyleSheet, Text, Image, TextInput, Linking } from "react-native";
import { Button } from '@rneui/themed';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import Logo from '../../assets/Logo.png';


export default function EsqueceuEmail ({navigation}){

    
  
        return(
            <View style={styles.container}>
                <Text>Recuperar Senha</Text>

            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        padding: 8, 
    }});