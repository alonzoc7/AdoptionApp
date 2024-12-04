import { StyleSheet, Text, View, Image, SafeAreaView, Linking, Pressable } from 'react-native';
import BottomNavBar from "../components/BottomNavBar";

export default function ProfileScreen() {
    const PROFILE_DATA = { picture: require("../assets/user.png"), name:"Corey Alonzo", email: "alonzoc713@gmail.com", phone: "(630)-888-8913", city:"Oswego"}
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.profileContainer}>
                <View style={styles.picContainer} >
                    <Image style={styles.picture} source={PROFILE_DATA.picture} resizeMode="contain"/>
                </View>
                <View style={styles.info}> 
                    <Text>Name: {PROFILE_DATA.name}</Text>
                    <Text>Email: {PROFILE_DATA.email}</Text>
                    <Text>Phone: {PROFILE_DATA.phone}</Text>
                </View>
                <View style={styles.creditContainer}>
                    <Text>App Credits:</Text>
                    <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/paw')}>Paw icons created by Freepik - Flaticon</Text>
                    <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/email')}>Email icons created by Freepik - Flaticon</Text>
                    <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/user')}>User icons created by Freepik - Flaticon</Text>
                    <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/heart')}>Heart icons created by Freepik - Flaticon</Text>
                    <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/heart')}>Heart icons created by Kiranshastry - Flaticon</Text>
                    <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/dog')}>Dog icons created by Freepik - Flaticon</Text>
                    <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/back')}>Back icons created by Roundicons - Flaticon</Text>
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
    profileContainer: {
        flex: 1,
    },
    picContainer: {
        flex: 1,
    },
    picture: {
        flex: 1,
        alignSelf: "center",
        height: "100%",
        width: "100%",
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 5,
        borderRadius: 50,
    },
    info: {
        flex: 1,
    },
    creditContainer: {
        flex: 1,
    }
});