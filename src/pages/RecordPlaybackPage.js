import { StyleSheet, Button, Text, View, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Center } from "native-base";
import WindowTextInput from "../components/TextInputComponent/TextInputRecordPlayback";
import { NavigationButtonComponent as NavBtn } from "../components/NavButtonComponent/NavButtonComponent";
import { ImageBackgroundComponent as BcgImg } from "../components/BackgroundImageComponent/BackgroundImageComponent";

export default RecordPlaybackPage = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate("TextToSpeechPage");
    };

    return (
        <BcgImg>
            <NativeBaseProvider>
                <NavBtn text="TTS page" onPress={pressHandler} />
                <View style={styles.mainWindowTextBoxDiv}>
                    <View style={styles.mainWindowTextBox}>
                        <WindowTextInput />
                    </View>
                </View>
            </NativeBaseProvider>
        </BcgImg>
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
