import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { WindowTextInputMultilineRecordPlayback as TextWindow } from "../TextWindowComponent/TextWindowComponentRecordPlayback";
import { RECORDING_OPTIONS_PRESET_HIGH_QUALITY as recOptions } from "../../services/micSettings";
import { recognizeWithoutGrammarRequest } from "../../services/serverInteraction";
import { Audio } from "expo-av";

export const WindowComponentRecordPlayback = () => {
    const [recording, setRecording] = React.useState();

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
        console.log(result);
    }

    return (
        <>
            <TextWindow />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.buttonStyle} onPress={startRecording}>
                    <Image source={require("../../img/start.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={stopRecording}>
                    <Image source={require("../../img/stop.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Image source={require("../../img/play.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Image source={require("../../img/pause.png")} />
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
