import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import BottomNavBar from "../components/BottomNavBar";
import AnimalListItem from "../components/AnimalListItem";


export default function BrowseScreen() {
    const ANIMAL_DATA = [
        {name:"Fluffy", breed: "Golden Retriever", sex: "female", age: "1 year", bio:"Fluffy loves playing with water."},
        {name:"Carlos", breed: "Dachshund", sex: "male", age: "3 years", bio:"Carlos loves playing with water."},
        {name:"Biscuit", breed: "Shih Tzu", sex: "male", age: "7 years", bio:"Biscuit loves playing with water."},
        {name:"Zoe", breed: "Dalmation", sex: "female", age: "7 months", bio:"Zoe loves playing with water."},
        {name:"Fred", breed: "Beagle", sex: "male", age: "1 year", bio:"Fred loves playing with water."},
        {name:"Mack", breed: "Irish Wolfhound", sex: "male", age: "2 years", bio:"Mack loves playing with water."},
    ]
    return (
        <SafeAreaView style={styles.mainContainer}>
            <FlatList style={styles.list} data={ANIMAL_DATA}
            renderItem={({item}) => <AnimalListItem name={item.name} breed={item.breed} age={item.age} />}
            keyExtractor={item => item.name}/>
            <BottomNavBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
});