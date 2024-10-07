import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

export default function AnimalListItem(imageSrc, name, ) {
    return (
        <SafeAreaView>
            <Button>
                <Image id="picture" source={imageSrc}/>
                <Text id="name">{name}</Text>
            </Button>
        </SafeAreaView>
    );
}