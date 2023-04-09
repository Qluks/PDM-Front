import React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import { Button } from '@rneui/themed';

export default class BottomLogin extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Button
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
                <Text style={styles.text} onPress={() => { Linking.openURL('https://reactnative.dev'); }} >Ainda não é cadastrado? Crie uma conta</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        marginLeft: 65,
        marginTop: 33,
    },
  });