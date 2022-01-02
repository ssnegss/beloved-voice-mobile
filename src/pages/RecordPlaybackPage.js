import { StyleSheet, Image, View } from "react-native";
import { NativeBaseProvider, Box, Center } from "native-base";
import { WindowComponentRecordPlayback as TextWindow } from "../components/WindowComponentRecordPlayback/WindowComponentRecordPlayback";
import { NavigationButtonComponent as NavBtn } from "../components/NavButtonComponent/NavButtonComponent";
import { ImageBackgroundComponent as BcgImg } from "../components/BackgroundImageComponent/BackgroundImageComponent";

export default RecordPlaybackPage = ({ navigation }) => {
    const pressHandlerTextToSpeech = () => {
        navigation.navigate("TextToSpeechPage");
    };

    return (
        <BcgImg>
            <NativeBaseProvider>
                <View style={{ flexDirection: "row", justifyContent: "center"}}>
                    <NavBtn image={require("../img/microphone.png")} />
                    <NavBtn image={require("../img/sound.png")} onPress={pressHandlerTextToSpeech} />
                </View>
                <View style={styles.mainWindowTextBoxDiv}>
                    <View style={styles.mainWindowTextBox}>
                        <TextWindow />
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
        width: "80%",
        alignItems: "center",
        backgroundColor: "rgba(370, 370, 370, 0.4)",
        borderRadius: 20,
    },
});
