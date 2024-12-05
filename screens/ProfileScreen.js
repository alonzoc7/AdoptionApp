import { StyleSheet, Text, View, Image, SafeAreaView, Linking, Pressable } from 'react-native';
import React, { useState } from 'react';
import BottomNavBar from "../components/BottomNavBar";

export default function ProfileScreen() {
    const [showCredits, setShowCredits] = useState(false)
    const PROFILE_DATA = { picture: require("../assets/user.png"), name:"Corey Alonzo", email: "alonzoc713@gmail.com", phone: "(630)-888-8913", city:"Oswego"}
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.profileContainer}>
                <View style={styles.settingsContainer} >
                    <Pressable style={styles.settingsButton} onPress={() => console.log('Cogwheel Pressed')}>
                        <Image style={styles.settingsIcon} source={require("../assets/cogwheel.png")} resizeMode="contain"/>
                    </Pressable>
                </View>
                <View style={styles.picContainer} >
                    <Image style={styles.picture} source={PROFILE_DATA.picture} resizeMode="contain"/>
                </View>
                <View style={styles.infoContainer}> 
                    <Text>Name: {PROFILE_DATA.name}</Text>
                    <Text>Email: {PROFILE_DATA.email}</Text>
                    <Text>Phone: {PROFILE_DATA.phone}</Text>
                    <Text>City: {PROFILE_DATA.city}</Text>
                </View>
                <View style={styles.creditContainer}>
                    <Pressable onPress={() => setShowCredits(!showCredits)}>
                        <Text style={styles.creditsTitle}>Toggle App Credits</Text>
                    </Pressable>
                    {showCredits ? (
                        <View>
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/paw')}>Paw icons created by logisstudio - Flaticon</Text>
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/email')}>Email icons created by Freepik - Flaticon</Text>
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/user')}>User icons created by Freepik - Flaticon</Text>
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/heart')}>Heart icons created by Freepik - Flaticon</Text>
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/heart')}>Heart icons created by Kiranshastry - Flaticon</Text>
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/dog')}>Dog icons created by Freepik - Flaticon</Text>
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/back')}>Back icons created by Roundicons - Flaticon</Text>
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/settings')}>Settings icons created by Freepik - Flaticon</Text>
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/member')}>Member icons created by meaicon - Flaticon</Text>
                        </View>
                    ): null
                    }
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
    settingsContainer: {
        flex: .25,
        justifyContent: "flex-end"
    },
    settingsButton: {
        flex: 1,
    },
    settingsIcon: {
        flex: 1,
    },
    picContainer: {
        flex: 1,
    },
    picture: {
        flex: 1,
        alignSelf: "center",
        height: "50%",
        width: "50%",
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 5,
        borderRadius: 50,
    },
    infoContainer: {
        flex: 1,
        justifyContent: "center",
    },
    creditContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        marginBottom: 10,
    },
    creditsTitle: {
        backgroundColor: "#f2eee9",
        fontSize: 12,
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 1.5,
        borderRadius: 5,
    },
    credits: {
        textDecorationLine: "underline",
        fontSize:8,
        color: "blue",
    },
});