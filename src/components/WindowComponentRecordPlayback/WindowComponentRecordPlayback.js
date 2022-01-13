import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { WindowTextInputMultilineRecordPlayback as TextWindow } from "../TextWindowComponent/TextWindowComponentRecordPlayback";
import { RECORDING_OPTIONS_PRESET_HIGH_QUALITY as recOptions } from "../../services/micSettings";
import { recognizeWithoutGrammarRequest } from "../../services/serverInteraction";
import * as Speech from "expo-speech";
import { Audio } from "expo-av";

export const WindowComponentRecordPlayback = () => {
    const [recording, setRecording] = React.useState();
    const [textFieldValue, setTextFieldValue] = React.useState("");
    const [startButtonDisabled, setStartButtonDisabled] = useState(false);
    const [stopButtonDisabled, setStopButtonDisabled] = useState(true);
    const [playButtonDisabled, setPlayButtonDisabled] = useState(true);
    const [pauseButtonDisabled, setPauseButtonDisabled] = useState(true);

    const [startButtonImage, setStartButtonImage] = useState(require("../../img/start.png"))
    const [stopButtonImage, setStopButtonImage] = useState(require("../../img/stop.png"))
    const [playButtonImage, setPlayButtonImage] = useState(require("../../img/play.png"))
    const [pauseButtonImage, setPauseButtonImage] = useState(require("../../img/pause.png"))

    async function startRecording() {
        try {
            console.log("Requesting permissions..");
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log("Starting recording..");
            const { recording } = await Audio.Recording.createAsync(recOptions);
            setRecording(recording);
            console.log("Recording started");
        } catch (err) {
            console.error("Failed to start recording", err);
        }
    }

    async function stopRecording() {
        console.log("Stopping recording..");
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        // console.log("Recording stopped and stored at", uri);
        // console.log(recording)
        // setRecording(undefined);
        const result = await recognizeWithoutGrammarRequest(uri);
        setTextFieldValue(result.toString());
        console.log(result);
    }

    const handleStartButtonClick = async () => {
        setStartButtonDisabled(true);
        setStopButtonDisabled(false);
        setPlayButtonDisabled(true);
        setPauseButtonDisabled(true);
        startRecording();

        setStartButtonImage(require("../../img/start-disabled.png"))
        setStopButtonImage(require("../../img/stop.png"))
        setPlayButtonImage(require("../../img/play.png"))
        setPauseButtonImage(require("../../img/pause.png"))
    };

    const handleStopButtonClick = async () => {
        setStartButtonDisabled(false);
        setStopButtonDisabled(true);
        setPlayButtonDisabled(false);
        setPauseButtonDisabled(true);
        stopRecording();

        setStartButtonImage(require("../../img/start.png"))
        setStopButtonImage(require("../../img/stop-disabled.png"))
        setPlayButtonImage(require("../../img/play.png"))
        setPauseButtonImage(require("../../img/pause-disabled.png"))
    };

    const handlePlayButtonClick = () => {

        setStartButtonImage(require("../../img/start.png"))
        setStopButtonImage(require("../../img/stop.png"))
        setPlayButtonImage(require("../../img/play.png"))
        setPauseButtonImage(require("../../img/pause.png"))

        Speech.speak(textFieldValue, { language: "ru" });
    };

    const handlePauseButtonClick = () => {
        setStartButtonDisabled(false);
        setStopButtonDisabled(true);
        setPlayButtonDisabled(false);
        setPauseButtonDisabled(true);

        setStartButtonImage(require("../../img/start.png"))
        setStopButtonImage(require("../../img/stop-disabled.png"))
        setPlayButtonImage(require("../../img/play.png"))
        setPauseButtonImage(require("../../img/pause-disabled.png"))
    };

    return (
        <>
            <TextWindow value={textFieldValue} onValueChange={(e) => setTextFieldValue} />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handleStartButtonClick}
                    disabled={startButtonDisabled}
                >
                    <Image source={startButtonImage} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handleStopButtonClick}
                    disabled={stopButtonDisabled}
                >
                    <Image source={stopButtonImage} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handlePlayButtonClick}
                    disabled={playButtonDisabled}
                >
                    <Image source={playButtonImage} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onClick={handlePauseButtonClick}
                    disabled={pauseButtonDisabled}
                >
                    <Image source={pauseButtonImage} />
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 15,
        height: 40,
        width: 40,
    },
});
