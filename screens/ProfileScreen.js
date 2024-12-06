import { StyleSheet, Text, View, Image, SafeAreaView, Linking, Pressable } from 'react-native';
import React, { useState } from 'react';
import BottomNavBar from "../components/BottomNavBar";

export default function ProfileScreen() {
    const [showCredits, setShowCredits] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const PROFILE_DATA = { picture: require("../assets/user.png"), name:"Corey Alonzo", email: "alonzoc713@gmail.com", phone: "(630)-888-8913", loc:"Oswego, IL"}
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.profileContainer}>
                <View style={styles.settingsContainer} >
                    <Pressable style={styles.settingsButton} onPress={() => {setShowSettings(!showSettings); console.log('showSettings is now '+ !showSettings)}}>
                        <Image style={styles.settingsIcon} source={require("../assets/cogwheel.png")} resizeMode="contain"/>
                    </Pressable>
                    {/* {showSettings ? (
                        <View>
                            <Text>Edit Info</Text>
                            <Text>Sign Out</Text>
                        </View>
                    ): null} */}
                </View>
                <View style={styles.picContainer} >
                    <Image style={styles.picture} source={PROFILE_DATA.picture} resizeMode="contain"/>
                </View>
                <View style={styles.infoContainer}> 
                    <Text style={styles.name}>{PROFILE_DATA.name}</Text>
                    <View style={styles.locationContainer}>
                        <Image style={styles.locationIcon} source={require("../assets/placeholder.png")} resizeMode="contain"/>
                        <Text style={styles.location}>{PROFILE_DATA.loc}</Text>
                    </View>
                    <Text style={styles.contact}>Email: {PROFILE_DATA.email}</Text>
                    <Text style={styles.contact}>Phone: {PROFILE_DATA.phone}</Text>
                </View>
                <View style={styles.creditContainer}>
                    <Pressable onPress={() => {setShowCredits(!showCredits); console.log('showCredits is now '+ !showCredits)}}>
                        <Text style={styles.creditsTitle}>App Credits</Text>
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
                            <Text style={styles.credits} onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/placeholder')}>Placeholder icons created by Freepik - Flaticon</Text>
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
        backgroundColor: "#a9d4ce",
    },
    profileContainer: {
        flex: 1,
    },
    settingsContainer: {
        flex: .25,
        backgroundColor: "#beebe5",
    },
    settingsButton: {
        paddingTop: 3,
        paddingRight: 3,
        height: "100%", 
        width: "15%",
        alignSelf: "flex-end"
    },
    settingsIcon: {
        flex: 1,
        height: "100%", 
        width: "100%",
    },
    picContainer: {
        flex: 1,
        backgroundColor: "#beebe5"
    },
    picture: {
        backgroundColor: "white",
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
    name: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        margin: 0,
        padding: 0,
    },
    locationContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: 0,
        padding: 0,
    },
    locationIcon: {
        height: "50%", 
        width: "10%"
    },
    location: {
        textAlign: "center",
    },
    contact: {
        flex: 1,
        textAlign: "center",
        margin: 0,
        padding: 0,
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