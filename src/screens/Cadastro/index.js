import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, Input } from '@rneui/themed';
import Constants from 'expo-constants';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import useStore from "../../../assets/themeStore";

const schema = yup.object({
  nome: yup.string().required("Informe seu nome!"),
  sexo: yup.string().required("Informe seu sexo"),
  email: yup.string().required("Informe seu email!").matches(/^\S+@\S+$/i, 'Email inválido!'),
  senha: yup.string().required("Informe uma senha para acessar futuramente!").min(6, "A senha tem que ter pelo menos 6 dígitos!"),
  repetirSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não conferem').required('Confirme sua senha'),
})

export default function Cadastro({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const { nome, sexo,  email, senha, repetirSenha } = data;
  
      const user = {
        name: nome,
        sexo: sexo,
        email: email,
        password: senha,
        confirmPassword: repetirSenha
      };
  
      const response = await fetch('https://aos-backend-production-0e13.up.railway.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } else {
        throw new Error('Erro ao registrar o usuário.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { theme } = useStore();

  return (
    <View style={styles[theme].container}>
      <ScrollView>
        <View style={styles[theme].form}>
          <Text style={styles[theme].texto}>NOME</Text>
          {errors.nome && <Text style={{ color: '#ff0000', marginLeft: 41, marginBottom: 30 }}>{errors.nome?.message}</Text>}
          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  styles[theme].inputForm,
                  errors.nome && { borderColor: "#ff0000", borderWidth: 2 },
                ]}
                placeholder="Nome"
                placeholderTextColor={"#BBBBBB"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
                


                <Text style={styles[theme].texto}>SEXO</Text>
                {errors.sexo && <Text style={{ color: '#ff0000', marginLeft: 41 , marginBottom:30}}>{errors.sexo?.message}</Text>}
                <Controller
                    control={control}
                    name="sexo"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            style={[
                                styles[theme].inputForm,
                                errors.sexo && { borderColor: "#ff0000",borderWidth: 2  },
                            ]}
                            placeholder="sexo"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                



               



                <Text style={styles[theme].texto}>EMAIL</Text>
                {errors.email && <Text style={{ color: '#ff0000', marginLeft: 41, marginBottom:30 }}>{errors.email?.message}</Text>}
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            style={[
                                styles[theme].inputForm,
                                errors.email && { borderColor: "#ff0000",borderWidth: 2  },
                            ]}
                            placeholder="Email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                





                <Text style={styles[theme].texto}>SENHA</Text>
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
                



                <Text style={styles[theme].texto}>REPETIR SENHA</Text>
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
                        marginBottom: 30,
                    }}
                    titleStyle={{ color: 'white', fontSize:18, paddingVertical: 5}}
                />

            </View >
        </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    dark:{
    container:{
        flex: 1,
        backgroundColor: '#15141F',
    },
    inputForm:{
        height: 48,
        width: 339,
        backgroundColor: '#ddddff',
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
    },
},
light:{
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    inputForm:{
        height: 48,
        width: 339,
        backgroundColor: '#ddddff',
        marginBottom: 25,
        borderRadius: 20,
        paddingLeft: 21,
    },
    form:{
        marginTop:20,
    },
    texto:{
        color: '#15141F',
        marginLeft:40,
        marginBottom:15,
    },
}
})