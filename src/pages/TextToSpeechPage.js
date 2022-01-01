import { StyleSheet, Text, View, Button } from "react-native";

export default TextToSpeechPage = ({ navigation }) => {   

    const pressHandler= () => {
        navigation.navigate('RecordPlaybackPage')
    }

    return (
        <View>
            <Button title='to rec page' onPress={pressHandler}/>
            <Text></Text>
        </View>
    );
};
