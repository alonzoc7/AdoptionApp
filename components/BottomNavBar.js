import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Pressable, Image } from 'react-native';
// add onpress to other screens
export default function BottomNavBar() {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={() => console.log('Button pressed!')} id="pawButton" style={styles.buttons}>
                <Image source={require("../assets/paw.png")} style={styles.icons}/>
            </Pressable>
            <Pressable onPress={() => console.log('Button pressed!')} id="msgButton" style={styles.buttons}>
                <Image source={require("../assets/msg.png")} style={styles.icons}/>
            </Pressable>
            <Pressable onPress={() => console.log('Button pressed!')} id="userButton" style={styles.buttons}>
                <Image source={require("../assets/user.png")} style={styles.icons}/>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#aae080",
        flex: 0.07,
        flexDirection: "row",
        padding: 0,
        margin: 0,
    },
    buttons: {
        flex: 1,
        justifyContent: "center",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        padding: 0,
        margin: 0,
    },
    icons: {
        height: "100%",
        width: "40%",
        padding: 0,
        margin: 0,
        alignSelf: "center",
    },
});