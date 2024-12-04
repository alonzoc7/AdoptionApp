import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, Pressable } from 'react-native';
import BottomNavBar from "../components/BottomNavBar";
// Add onPress for messaging shelter to open messaging tab with new message to certain shelter
// Add Pressable for adding/removing to favorites list and changing the heart icon
export default function AnimalProfileScreen({name, breed, sex, age, bio, shelter}) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <View style={styles.top}>
                    <Image style={styles.topIcon} source={require("../assets/left-arrow.png")} resizeMode="contain"/>
                    <Image style={styles.topIcon} source={require("../assets/hollowHeart.png")} resizeMode="contain"/>
                </View>
                <View style={styles.middle}>
                    <Image style={styles.dogPicture} source={require("../assets/dog.png")} resizeMode="contain"/>
                </View>
                <View style={styles.bottom}>
                    <Text style={[styles.text, styles.name]}>{name}</Text>
                    <Text>Breed: {breed}</Text>
                    <Text>Sex: {sex}</Text>
                    <Text>Age: {age}</Text>
                    <Text>Things to know about {name}: {bio}</Text>
                    <Pressable onPress={() => console.log('Button pressed!')}>
                        <Text>Come meet {name} at: {shelter}</Text>
                    </Pressable>
                </View>
            </View>
            <BottomNavBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    infoContainer: {
        flex: 1,
    },
    top: {
        flex: .2,
        flexDirection: "row",
        justifyContent: "space-between",
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: .5,
    },
    topIcon: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    middle: {
        flex: 1,
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "red",
        borderWidth: .5,
    },
    dogPicture: {
        flex: 1,
        height: "100%"
    },
    bottom: {
        flex: 2,
        borderStyle: "solid",
        borderColor: "blue",
        borderWidth: .5,
    },
    name: {
        fontSize: 30,
    },
    text: {
        textAlign: "center",
    },
});