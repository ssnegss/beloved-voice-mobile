import { StyleSheet, Text, View, Button, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { ImageBackgroundComponent as BcgImg } from "../components/BackgroundImageComponent/BackgroundImageComponent";

export default TextToSpeechPage = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate("RecordPlaybackPage");
    };

    return (
        <BcgImg>
            <View>
                <Button title="to rec page" onPress={pressHandler} />
                <Text></Text>
            </View>
        </BcgImg>
    );
};

const styles = StyleSheet.create({
    navButton: {
        backgroundColor: "rgba(370, 370, 370, 0.4)",
        alignItems: "center",
        width: "30%",
        padding: 10,
        margin: 15,
        borderRadius: 50,
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
