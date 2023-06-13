import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import { useDadosUserGet } from '../../../api/api';
import useStore from "../../../assets/themeStore";

export default function Perfil() {
  const { dadosUser, isLoadingUser, isErrorUser } = useDadosUserGet();
  const navigation = useNavigation();
  const { theme } = useStore();

  if (isLoadingUser) {
    return <Text style={styles.loadingText}>Carregando...</Text>;
  }

  if (isErrorUser) {
    return <Text style={styles.errorText}>Ocorreu um erro ao carregar os dados</Text>;
  }

  return (
    <View style={styles[theme].container}>
      <FlatList
        data={dadosUser}
        keyExtractor={(item) => item.id}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={styles[theme].itemContainer}>
            <Text style={styles[theme].itemText}>{item.name}</Text>
            <Text style={styles[theme].itemText}>{item.email}</Text>
            <Text style={styles[theme].itemText}>{item.sexo}</Text>
            <Text style={styles[theme].itemText}>{item.password}</Text>
          </View>
        )}
      />
      <Button
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          })
        }
        title="Sair"
        buttonStyle={styles[theme].logoutButton}
        titleStyle={styles[theme].logoutButtonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dark:{
    container: {
      flex: 1,
      backgroundColor: "#15141F",
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    loadingText: {
      color: "#FFFFFF",
      fontSize: 16,
    },
    errorText: {
      color: "#FF0000",
      fontSize: 16,
    },
    itemContainer: {
      marginBottom: 16,
      backgroundColor: "#DDDDFF",
      padding: 16,
      borderRadius: 8,
    },
    itemText: {
      color: "#000000",
      fontSize: 16,
      marginBottom: 8,
    },
    logoutButton: {
      backgroundColor: "#190152",
      borderRadius: 12,
      width: 339,
      height: 55,
      marginLeft: 24,
      fontSize: 18,
      marginTop: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    logoutButtonText: {
      color: "#FFFFFF",
      fontSize: 18,
    },
  
 
},
light:{
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  loadingText: {
    color: "#15141F",
    fontSize: 16,
  },
  errorText: {
    color: "#FF0000",
    fontSize: 16,
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: "#DDDDFF",
    padding: 16,
    borderRadius: 8,
  },
  itemText: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 8,
  },
  logoutButton: {
    backgroundColor: "#190152",
    borderRadius: 12,
    width: 339,
    height: 55,
    marginLeft: 24,
    fontSize: 18,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
}
});
