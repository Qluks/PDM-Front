import React from "react";
import { View,  Text, StyleSheet, TextInput, ScrollView } from "react-native";
import{ Button } from '@rneui/themed';
import Constants from 'expo-constants';
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

const schema = yup.object({
    nome: yup.string().required("Informe seu nome!"),
    sexo: yup.string().required("Informe seu sexo"),
    apelido: yup.string().required("Informe seu apelido!"),
    email: yup.string().required("Informe seu email!").matches(/^\S+@\S+$/i, 'Email inválido!'),
    senha: yup.string().required("Informe uma senha para acessar futuramente!").min(6, "A senha tem que ter pelo menos 6 dígitos!"),
    repetirSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não conferem').required('Confirme sua senha'),
})




export default function Cadastro ({navigation}){

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

    return(
        <View style={styles.container}>
        <ScrollView>  

            <View style={styles.form}>

            
                <Text style={styles.texto}>NOME</Text>
                <Controller
                    control={control}
                    name="nome"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[
                                styles.inputForm,
                                errors.nome && { borderColor: "#ff0000",borderWidth: 2  },
                            ]}
                            placeholder="Nome"
                            placeholderTextColor={"#BBBBBB"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.nome && <Text style={{ color: '#ff0000', marginLeft: 45, marginBottom:30 }}>{errors.nome?.message}</Text>}



                <Text style={styles.texto}>SEXO</Text>
                <Controller
                    control={control}
                    name="sexo"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[
                                styles.inputForm,
                                errors.sexo && { borderColor: "#ff0000",borderWidth: 2  },
                            ]}
                            placeholder="sexo"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.sexo && <Text style={{ color: '#ff0000', marginLeft: 45 , marginBottom:30}}>{errors.sexo?.message}</Text>}



                <Text style={styles.texto}>APELIDO</Text>
                <Controller
                    control={control}
                    name="apelido"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[
                                styles.inputForm,
                                errors.apelido && { borderColor: "#ff0000",borderWidth: 2   },
                            ]}
                            placeholder="Apelido"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.apelido && <Text style={{ color: '#ff0000', marginLeft: 45 , marginBottom:30}}>{errors.apelido?.message}</Text>}



                <Text style={styles.texto}>EMAIL</Text>
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
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.email && <Text style={{ color: '#ff0000', marginLeft: 45, marginBottom:30 }}>{errors.email?.message}</Text>}





                <Text style={styles.texto}>SENHA</Text>
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
                {errors.senha && <Text style={{ color: '#ff0000', marginLeft: 45, marginBottom:30 }}>{errors.senha?.message}</Text>}



                <Text style={styles.texto}>REPETIR SENHA</Text>
                <Controller
                    control={control}
                    name="repetirSenha"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput 
                            style={[
                                styles.inputForm,
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
                {errors.repetirSenha && <Text style={{ color: '#ff0000', marginLeft: 45, marginBottom:30 }}>{errors.repetirSenha?.message}</Text>}

                <Button
                    onPress={handleSubmit(onSubmit)}
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
        </ScrollView>
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