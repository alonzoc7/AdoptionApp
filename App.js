import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BrowseScreen from './screens/BrowseScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <BrowseScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
