import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import Logo from '../../assets/Logo.png';
import { Button, Input } from '@rneui/themed';
import Constants from 'expo-constants';
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import useStore from "../../../assets/themeStore"; 


const schema = yup.object({
senha: yup.string().required("Informe uma senha para acessar futuramente!").min(6, "A senha tem que ter pelo menos 6 dígitos!"),
repetirSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não conferem').required('Confirme sua senha'),
})


export default function EsqueceuSenha ({navigation}){

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
  
    const onSubmit = (data) => {
        console.log(data);
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    const { theme } = useStore();
  
        return(
            <View style={styles[theme].container}>
                <ScrollView>
                <Image style={styles[theme].logo} source={Logo} />

                
                {errors.senha && <Text style={{ color: '#ff0000', marginLeft: 41, marginBottom:30 }}>{errors.senha?.message}</Text>}
                <Controller
                    control={control}
                    name="senha"
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        style={[
                            styles[theme].inputForm,
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
                
                
                {errors.repetirSenha && <Text style={{ color: '#ff0000', marginLeft: 41, marginBottom:30 }}>{errors.repetirSenha?.message}</Text>}
                <Controller
                    control={control}
                    name="repetirSenha"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input 
                            style={[
                                styles[theme].inputForm,
                                errors.repetirSenha && { borderColor: "#ff0000",borderWidth: 2  },
                            ]}
                            placeholder="Repetir Senha"
                            secureTextEntry={true}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />

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
            </ScrollView>
            </View>
        )
    }


const styles = StyleSheet.create({
    dark:{
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
    
},
light:{
    container: {
        flex:1,
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ffffff',
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
}
});