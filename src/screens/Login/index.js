import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Button } from '@rneui/themed';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import Logo from '../../assets/Logo.png';


const schema = yup.object({
    email: yup.string().required("Informe seu email!").matches(/^\S+@\S+$/i, 'Email inválido!'),
    senha: yup.string().required("Informe sua senha!").min(6, "A senha tem que ter pelo menos 6 dígitos!"),
})

export default function Login ({navigation}){

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

      const onSubmit = (data) => {
        console.log(data);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Catalogo' }],
        });
      };
  
        return(
            <View style={styles.container}>
            <ScrollView>

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


                   
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                                style={[
                                    styles.inputForm,
                                    errors.email && { borderColor: "#ff0000",borderWidth: 2  },
                                ]}
                                placeholder="Email"
                                placeholderTextColor={"#BBBBBB"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            )}
                    />
                    {errors.email && <Text style={{ color: '#ff0000', marginLeft: 45 }}>{errors.email?.message}</Text>}


                    
                    <Controller
                        control={control}
                        name="senha"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                                style={[
                                    styles.inputForm,
                                    errors.senha && { borderColor: "#ff0000",borderWidth: 2  },
                                ]}
                                placeholder="Senha"
                                secureTextEntry={true}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            )}
                    />
                    {errors.senha && <Text style={{ color: '#ff0000', marginLeft: 45 }}>{errors.senha?.message}</Text>}
                

                    <Text style={styles.text} onPress={() => navigation.navigate("Esqueceu a Senha")} >Esqueceu a senha?</Text>
                </View>


                

                <View style={styles.container3}>
                    <Button
                        onPress={handleSubmit(onSubmit)}
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
            </ScrollView>
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
    container1: {
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
        marginBottom: 3,
        marginTop:25,
        borderRadius: 20,
        paddingLeft: 21,
        
    },
    text: {
        color: '#4285F4',
        marginLeft: 242,
        marginTop: 20,
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
  });