import { StyleSheet, Button, Text, View, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Center } from "native-base";
import WindowTextInput from "../components/TextInputComponent/TextInputRecordPlayback";

export default RecordPlaybackPage = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate("TextToSpeechPage");
    };

    return (
        <ImageBackground source={require("../img/bcg.png")} style={styles.image}>
            <NativeBaseProvider>
                <View style={styles.navButtonDiv}>
                    <TouchableOpacity style={styles.navButton} onPress={pressHandler}>
                        <Text>to TTS page</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainWindowTextBoxDiv}>
                    <View style={styles.mainWindowTextBox}>
                        <WindowTextInput />
                    </View>
                </View>
            </NativeBaseProvider>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    navButton: {
        backgroundColor: "rgba(370, 370, 370, 0.4)",
        alignItems: "center",
        width: "30%",
        padding: 10,
        margin: 15
    },
    navButtonDiv: {
        justifyContent: "center",
        alignItems: "center",
    },
    mainWindowTextBoxDiv: {
        justifyContent: "center",
        alignItems: "center",
    },
    mainWindowTextBox: {
        width: "70%",
        borderColor: "gray",
        borderWidth: 2,
        alignItems: "center",
    },
    image: {
        position: "absolute",
        left: 0,
        top: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
