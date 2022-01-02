import { StyleSheet, Text, View, Button, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { NavigationButtonComponent as NavBtn } from "../components/NavButtonComponent/NavButtonComponent";
import { ImageBackgroundComponent as BcgImg } from "../components/BackgroundImageComponent/BackgroundImageComponent";

export default TextToSpeechPage = ({ navigation }) => {
    const pressHandlerRecordPlayback = () => {
        navigation.navigate("RecordPlaybackPage");
    };

    return (
        <BcgImg>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <NavBtn image={require("../img/microphone.png")} onPress={pressHandlerRecordPlayback} />
                    <NavBtn image={require("../img/sound.png")} />
                </View>
                <Text></Text>
            </View>
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
});
