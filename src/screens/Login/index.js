import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderLogin from "../../components/headerLogin";
import CenterLogin from "../../components/centerLogin";
import BottomLogin from "../../components/bottomLogin";

export default class Login extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <HeaderLogin></HeaderLogin>
                <CenterLogin></CenterLogin>
                <BottomLogin></BottomLogin>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
  });