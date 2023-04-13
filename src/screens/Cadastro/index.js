import React from "react";
import { View,  Text, StyleSheet, TextInput } from "react-native";
import{ Button } from '@rneui/themed';
import Constants from 'expo-constants';


export default function Cadastro ({navigation}){

    
  
    return(
        <View style={styles.container}>

            <View style={styles.form}>
            
                <Text style={styles.texto}>NOME</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="Nome"
                />

                <Text style={styles.texto}>EMAIL</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="Email"
                />

                <Text style={styles.texto}>SEXO</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="Sexo"
                />

                <Text style={styles.texto}>SENHA</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="Senha"
                    secureTextEntry={true}
                />

                <Text style={styles.texto}>REPETIR SENHA</Text>
                <TextInput 
                    style={styles.inputForm}
                    placeholder="Repetir Senha"
                    secureTextEntry={true}
                />

                <Button
                    title="Registrar"
                    buttonStyle={{
                        backgroundColor: '#190152',
                        borderRadius: 12,
                    }}      
                    containerStyle={{
                        width: 339,
                        height: 55,
                        marginLeft: 24,
                        marginTop: 24,
                        fontSize: 18,   
                    }}
                    titleStyle={{ color: 'white', fontSize:18, paddingVertical: 5}}
                />

            </View >

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#15141F',
    },
    inputForm:{
        height: 48,
        width: 339,
        backgroundColor: '#ddddff',
        marginLeft: 24,
        marginBottom: 25,
        borderRadius: 20,
        paddingLeft: 21,
    },
    form:{
        marginTop:20,
    },
    texto:{
        color: '#ffffff',
        marginLeft:40,
        marginBottom:15,
    }
})