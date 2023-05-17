import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDados } from '../../../api/dados';
import useStore from "../../../assets/themeStore";

const DadosScreen = () => {
  const { dados, isLoading, isError } = useDados();
  const navigation = useNavigation();
  const { theme } = useStore();

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (isError) {
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  const handleItemPress = (item) => {
    navigation.navigate('Detalhes', { item });
  };

  return (
    <View style={styles[theme].container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.objectId}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)} style={styles[theme].item}>
            <Image source={{ uri: item.foto.url }} style={styles[theme].image} />
            <Text style={styles[theme].text}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const itemWidth = (width - 20) / 2;

const styles = StyleSheet.create({
  dark:{
  container: {
    flex: 1,
    backgroundColor: '#15141F',
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: '#15141F',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: itemWidth,
    height: itemWidth + 40,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: itemWidth - 20,
    height: itemWidth - 60,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
  },
},
light:{
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: itemWidth,
    height: itemWidth + 40,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: itemWidth - 20,
    height: itemWidth - 60,
    borderRadius: 5,
  },
  text: {
    color: '#15141F',
  },
}
});

export default DadosScreen;
