import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
        <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#15141F',
    padding: 8, 
  },
});

