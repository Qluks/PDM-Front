import React from 'react';
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native';
import useStore from "../../../assets/themeStore";


const Detalhamento = ({ route }) => {
  const { item } = route.params;

  const getBoxColor = (idade) => {
    switch (idade) {
      case 0:
        return '#00FF00';
      case 10:
        return '#0000FF';
      case 12:
        return '#FFFF00';
      case 14:
        return '#FFA500';
      case 16:
        return '#FF0000';
      case 18:
        return '#000000';
      default:
        return '#FFFFFF';
    }
  };

  const { theme } = useStore();

  return (
    <View style={styles[theme].container}>
    <ScrollView>
      <Image source={{ uri: item.foto.url }} style={styles[theme].image} />
      <Text style={styles[theme].titulo}>{item.titulo}</Text>
      <View style={[styles[theme].idadeBox, { backgroundColor: getBoxColor(item.idade) }]}>
        <Text style={styles[theme].idadeText}>{item.idade}</Text>
      </View>
      <View style={styles[theme].generoContainer}>
        {item.genero.map((generoItem) => (
          <View style={styles[theme].generoBox} key={generoItem}>
            <Text style={styles[theme].generoText}>{generoItem}</Text>
          </View>
        ))}
      </View>
      <Text style={styles[theme].text}>{item.descricao}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dark:{
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#15141F',
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 5,
  },
  titulo: {
    color: '#fff',
    fontSize: 40,
    marginTop: 30,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  idadeBox: {
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  idadeText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  generoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    marginTop: 20,
  },
  generoBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  generoText: {
    color: '#000',
    fontSize: 14,
  },
},
light:{
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 5,
  },
  titulo: {
    color: '#15141F',
    fontSize: 40,
    marginTop: 30,
  },
  text: {
    color: '#15141F',
    fontSize: 16,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  idadeBox: {
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  idadeText: {
    color: '#15141F',
    fontSize: 14,
    textAlign: 'center',
  },
  generoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    marginTop: 20,
  },
  generoBox: {
    backgroundColor: '#15141F',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  generoText: {
    color: '#ffffff',
    fontSize: 14,
  },
}
});

export default Detalhamento;
