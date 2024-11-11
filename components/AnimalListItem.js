import { StyleSheet, Text, View, FlatList, SafeAreaView, Pressable, Image } from 'react-native';
import { Button } from 'react-native-web';

export default function AnimalListItem(imageSrc, name, ) {
    return (
        <SafeAreaView style={styles.container}>
            <Image id="smallAnimalIcon" source={require("../assets/icon.png")} style={styles.icon}/>
            <View style={styles.textContainer}>
                <Text>Fluffy</Text>
                <Text>Shih-tzu</Text>
                <Text>2 yr</Text>
            </View>
            <Pressable onPress={() => console.log('Button pressed!')} style={styles.button}>
                <Text>View</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "beige",
        flex: .1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0,
        margin: 0,
    },
    button: {
        height: "35%",
        width: "30%",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        padding: 0,
        margin: 0,
    },
    textContainer: {
        flexDirection: "column",
        width: "30%",
    },
    icon: {
        height: "85%",
        width: "30%",
        padding: 0,
        margin: 0,
        alignSelf: "center",
    },
});