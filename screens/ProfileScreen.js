import { StyleSheet, Text, View, FlatList, SafeAreaView, Linking } from 'react-native';
import BottomNavBar from "../components/BottomNavBar";

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            <Image id="picture" source={require("../assets/")}/>
            <Text id="name">Corey</Text>
            <Text id="email">alonzoc713@gmail.com</Text>
            <Button><Text>Favorites</Text></Button>
            <View id="creditContainer">
                <Text>Credits:</Text>
                <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/paw')}>Paw icons created by Freepik - Flaticon</Text>
                <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/email')}>Email icons created by Freepik - Flaticon</Text>
                <Text onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/user')}>User icons created by Freepik - Flaticon</Text>
                <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Kiranshastry - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>
            </View>
            <BottomNavBar/>
        </SafeAreaView>
    );
}