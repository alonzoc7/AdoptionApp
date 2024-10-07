import { StyleSheet, Text, View, FlatList, SafeAreaView, Button } from 'react-native';
import BottomNavBar from "../components/BottomNavBar";
// Add onPress for messaging shelter to open messaging tab with new message to certain shelter
// Add onPress for adding/removing to favorites list and changing the heart icon
export default function AnimalProfileScreen(name, breed, sex, age, bio, shelter) {
    return (
        <SafeAreaView>
            <Image id="picture" source="../assets/"/>
            <Text id="name">{name}</Text>
            <Text id="breed">{breed}</Text>
            <Text id="sex">{sex}</Text>
            <Text id="age">{age}</Text>
            <Text id="bio">{bio}</Text>
            <Button><Text>Location: {shelter}</Text></Button>
            <Button onPress><Image id="like" source="../assets/hollowHeart.png"/></Button>
            <BottomNavBar/>
        </SafeAreaView>
    );
}