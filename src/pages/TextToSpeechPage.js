import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationButtonComponent as NavBtn } from "../components/NavButtonComponent/NavButtonComponent";
import { ImageBackgroundComponent as BcgImg } from "../components/BackgroundImageComponent/BackgroundImageComponent";
import { WindowComponentTextToSpeech as TextWindow } from "../components/WindowComponentTextToSpeech/WindowComponentTextToSpeech";
import { HeaderNameComponent as Header } from "../components/HeaderNameComponent/HeaderNameComponent";

export class TextToSpeechPage extends React.Component {

    constructor(props) {
        super(props);
        this.navigation = props.navigation
      }

    render() {
        const pressHandlerRecordPlayback = () => {
            this.navigation.navigate("RecordPlaybackPage");
        };

        return (
            <BcgImg>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <NavBtn image={require("../img/microphone.png")} onPress={pressHandlerRecordPlayback} />
                        <NavBtn image={require("../img/sound.png")} />
                    </View>
                    <Header header={"Text to Speech page"} />
                    <View style={styles.mainWindowTextBoxDiv}>
                        <View style={styles.mainWindowTextBox}>
                            <TextWindow />
                        </View>
                    </View>
                </View>
            </BcgImg>
        );
    }
}

const styles = StyleSheet.create({
    mainWindowTextBoxDiv: {
        justifyContent: "center",
        alignItems: "center",
    },
    mainWindowTextBox: {
        width: "80%",
        backgroundColor: "rgba(370, 370, 370, 0.4)",
        borderRadius: 20,
    },
});
