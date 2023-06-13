import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDadosNoticeGet } from '../../../api/api';
import useStore from '../../../assets/themeStore';

const DadosScreen = () => {
  const { dadosNotice, isLoadingNotice, isErrorNotice } = useDadosNoticeGet();
  const navigation = useNavigation();
  const { theme } = useStore();

  if (isLoadingNotice) {
    return <Text>Carregando...</Text>;
  }

  if (isErrorNotice) {
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  return (
    <View style={styles[theme].Container}>
      <FlatList
        data={dadosNotice}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <View style={styles[theme].itemContainer}>
          
            <Text style={styles[theme].itemTextTema}>{item.tema}</Text>
            <Image source={{ uri: item.imagem.url }} style={styles[theme].itemImage} />
            <Text style={styles[theme].itemText}>{item.noticia}</Text>
            <View style={styles[theme].horizontalLine} />
          </View>
        )}
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  dark:{
  Container:{
    flex: 1,
    backgroundColor: '#15141F'
  },
  itemContainer: {
    marginBottom: 10, 
  },
  itemImage: {
    width: 400, 
    height: 200, 
  },
  itemText: {
    fontSize: 15,
    color: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify',
    marginTop: 15,
    marginBottom: 30,
  },
  itemTextTema:{
    fontSize: 25,
    color: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify',
  },
  horizontalLine: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
},
  light:{
    Container:{
      flex: 1,
      backgroundColor: '#ffffff'
    },
    itemContainer: {
      marginBottom: 10, 
    },
    itemImage: {
      width: 400, 
      height: 200, 
    },
    itemText: {
      fontSize: 15,
      color: '#15141F',
      marginLeft: 10,
      marginRight: 10,
      textAlign: 'justify',
      marginTop: 15,
      marginBottom: 30,
    },
    itemTextTema:{
      fontSize: 25,
      color: '#15141F',
      marginLeft: 10,
      marginRight: 10,
      textAlign: 'justify',
    },
    horizontalLine: {
      borderBottomColor: '#15141F',
      borderBottomWidth: 1,
      marginHorizontal: 10,
    },
  },
  });




export default DadosScreen;
