import React from "react";
import { View,  Text } from "react-native";
import { Button } from '@rneui/themed';


export default function Perfil ({navigation}){

    
  
    return(
        <View >
            <Text>Perfil</Text>

            <Button
                onPress={() => navigation.reset({
                    index:0,
                    routes: [{name: 'Login'}]
                })}
                title="Sair"
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
            
        </View>
    )
}