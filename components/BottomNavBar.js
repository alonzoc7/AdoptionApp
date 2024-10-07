import { StyleSheet, Text, View, FlatList, SafeAreaView, Button } from 'react-native';
// add onpress to other screens
export default function BottomNavBar() {
    return (
        <SafeAreaView>
            
            <Button onPress><Image source="../assets/paw.png"/><Text>Browse</Text></Button>
            <Button><Image source="../assets/msg.png"/><Text>Messages</Text></Button>
            <Button><Image source="../assets/user.png"/><Text>Profile</Text></Button>
        </SafeAreaView>
    );
}