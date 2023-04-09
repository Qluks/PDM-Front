import React from "react";
import { View, Image, TextInput, Text, Linking, StyleSheet } from "react-native";
import Logo from '../../assets/Logo.png';

export default class CenterLogin extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={Logo} />
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={"#BBBBBB"}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor={"#BBBBBB"}
                />
                <Text style={styles.text} onPress={() => { Linking.openURL('https://reactnative.dev'); }} >Esqueceu a senha?</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
    input: {
        height: 48,
        width: 339,
        backgroundColor: '#211F30',
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
  });