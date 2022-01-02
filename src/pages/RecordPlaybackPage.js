import { StyleSheet, Button, Text, View, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Center } from "native-base";
import { WindowComponentRecordPlayback as TextWindow } from "../components/WindowComponentRecordPlayback/WindowComponentRecordPlayback";
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
        width: "70%",
        borderColor: "gray",
        borderWidth: 2,
        alignItems: "center",
        backgroundColor: "rgba(370, 370, 370, 0.4)",
        borderRadius: 20,
    }
});
