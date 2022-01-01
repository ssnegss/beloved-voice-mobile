import { StyleSheet, View } from "react-native";
import { NativeBaseProvider, Box, Button, Center } from "native-base";
import WindowTextInput from "../components/TextInputComponent/TextInputRecordPlayback";

export default RecordPlaybackPage = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate("TextToSpeechPage");
    };

    return (
        <NativeBaseProvider>
            <Button onPress={pressHandler}>to TTS page</Button>
            <View style={styles.mainWindowTextBoxDiv}>
                <View style={styles.mainWindowTextBox}>
                    <WindowTextInput />
                </View>
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    mainWindowTextBoxDiv: {
        justifyContent: "center",
        alignItems: "center",
    },
    mainWindowTextBox: {
        width: '70%',
        borderColor: "gray",
        borderWidth: 2,
        alignItems: "center",
    }
});
