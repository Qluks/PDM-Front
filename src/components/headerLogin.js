import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'

export default class HeaderLogin extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.viewUp}>
                    <Text style={styles.textLogin}>Login</Text>
                    <Icon name='person' color='#FFFFFF' style={styles.icon}/>
                </View>
                <View>
                    <Text style={styles.text}>Bem Vindo!</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
    text: {
        marginTop: 20,
        marginLeft: 24,
        fontSize: 13,
        color: '#FFFFFF',
    },
    icon: {
        marginTop: 41,
        marginLeft: 5,
    },
  });