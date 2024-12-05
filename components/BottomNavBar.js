import { StyleSheet, Text, View, FlatList, SafeAreaView, Button, Pressable, Image } from 'react-native';
// add onpress to other screens
export default function BottomNavBar() {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={() => console.log('Button pressed!')} style={styles.buttons}>
                <Image source={require("../assets/paw.png")} style={styles.icons} resizeMode="contain"/>
            </Pressable>
            <Pressable onPress={() => console.log('Button pressed!')} style={styles.buttons}>
                <Image source={require("../assets/redHeart.png")} style={styles.icons} resizeMode="contain"/>
            </Pressable>
            <Pressable onPress={() => console.log('Button pressed!')} style={styles.buttons}>
                <Image source={require("../assets/member.png")} style={styles.icons} resizeMode="contain"/>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.07,
        flexDirection: "row",
    },
    buttons: {
        backgroundColor: "#f2eee9",
        flex: 1,
        justifyContent: "center",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
    },
    icons: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
    },
});