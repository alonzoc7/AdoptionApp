import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BrowseScreen from './screens/BrowseScreen';
import AnimalProfileScreen from './screens/AnimalProfileScreen';
import ProfileScreen from './screens/ProfileScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <AnimalProfileScreen name="Fluffy" breed="Golden Retriever" sex="female" age="1 year" bio="Fluffy loves playing with water." shelter="Oswego Animal Shelter"/>
      {/* <BrowseScreen/> */}
      {/* <ProfileScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
