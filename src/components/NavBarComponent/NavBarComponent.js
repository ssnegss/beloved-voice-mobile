import { StyleSheet, Button, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function NavBarComponent() {

    const pressHandler = () => {
        navigation.navigate('RecordPlaybackPage')
    }

    return (
        <View>
            <Button
            title="rec"
            onPress={pressHandler}
            />
            <Button
            title="toPlay"
            />
        </View>
    );
};