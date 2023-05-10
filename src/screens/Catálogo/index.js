import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
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
    <View>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.foto.url }} style={{ width: 300, height: 200 }}/>
            <Text>{item.titulo}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DadosScreen;