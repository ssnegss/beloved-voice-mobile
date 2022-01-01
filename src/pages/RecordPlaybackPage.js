import { StyleSheet, Text, View, Button } from "react-native";

export default RecordPlaybackPage = ({ navigation }) => {

    const pressHandler= () => {
        navigation.navigate('TextToSpeechPage')
    }

    return (
        <View>
            <Button title='to play page' onPress={pressHandler}/>
            <Text></Text>
        </View>
    );
};
