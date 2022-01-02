import { StyleSheet, Button, Text, View, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Center } from "native-base";
import WindowTextInput from "../components/TextInputComponent/TextInputRecordPlayback";
import { NavBarComponent } from "../components/NavButtonComponent/NavButtonComponent";

export default RecordPlaybackPage = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate("TextToSpeechPage");
    };

    return (
        <ImageBackground source={require("../img/bcg.png")} style={styles.image}>
            <NativeBaseProvider>
            <NavBarComponent text='TTS page' onPress={pressHandler}/>
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
