import { StyleSheet, Text, View, FlatList, SafeAreaView, Pressable, Image } from 'react-native';
import { Button } from 'react-native-web';

export default function AnimalListItem({name, breed, age}) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.iconContainer}>
                <Image id="smallAnimalIcon" source={require("../assets/dog.png")} style={styles.icon}/>
            </View>
            <View style={styles.textContainer}>
                <Text>{name}</Text>
                <Text>{breed}</Text>
                <Text>{age}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => console.log('Button pressed!')} style={styles.button}>
                    <Text>View</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#f7e7d5",
        flex: 1,
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: .5,
    },
    iconContainer: {
        flex: 1,
        justifyContent: "center",
    },
    icon: {
        height: "90%",
        width: "60%",
        alignSelf: "center",
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 1,
    },
    textContainer: {
        flex: 1,
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    buttonContainer: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        flex: .5,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#80d0e0",
        borderStyle: "solid",
        borderColor: "#67a8b5",
        borderWidth: 1,
    },
});