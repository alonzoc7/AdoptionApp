import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavBar from './components/BottomNavBar';
import AnimalListItem from './components/AnimalListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <AnimalListItem/>
      <BottomNavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
