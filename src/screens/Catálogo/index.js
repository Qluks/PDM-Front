import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { useDados } from '../../../api/dados';

const DadosScreen = () => {
  const { dados, isLoading, isError } = useDados();

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (isError) {
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.objectId}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.foto.url }} style={styles.image} />
            <Text style={styles.text}>{item.titulo}</Text>
          </View>
        )}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const itemWidth = (width - 20) / 2;

const styles = StyleSheet.create({
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
});

export default DadosScreen;
