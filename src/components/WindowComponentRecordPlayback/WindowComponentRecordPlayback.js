import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { WindowTextInputMultilineRecordPlayback as TextWindow } from "../TextWindowComponent/TextWindowComponentRecordPlayback";
// import Voice from "@react-native-community/voice";
// import ReactMic from "react-mic";  ___ не работает
// import { Audio } from "expo-av";
import AudioRecord from "react-native-audio-record";

export const WindowComponentRecordPlayback = () => {

    // ------------- ЭТО react-native-audio-record -------------------------
    // ------------- походу не работает с expo -----------------------------

    const options = {
        sampleRate: 16000, // default 44100
        channels: 1, // 1 or 2, default 1
        bitsPerSample: 16, // 8 or 16, default 16
        audioSource: 6, // android only (see below)
        wavFile: "test.wav", // default 'audio.wav'
    };

    AudioRecord.init(options);

    // -----------ЭТО  expo-av ----------------------------------------------

    // const RECORDING_OPTIONS_PRESET_HIGH_QUALITY = {
    //     isMeteringEnabled: true,
    //     android: {
    //         extension: ".wav",
    //         outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT,
    //         audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT,
    //         sampleRate: 16000,
    //         numberOfChannels: 1,
    //         bitRate: 256000,
    //     },
    //     ios: {
    //         extension: ".wav",
    //         audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
    //         sampleRate: 16000,
    //         numberOfChannels: 1,
    //         bitRate: 256000,
    //         linearPCMBitDepth: 16,
    //         linearPCMIsBigEndian: false,
    //         linearPCMIsFloat: false,
    //     },
    // };

    // const [recording, setRecording] = React.useState();

    // async function startRecording() {
    //     try {
    //         console.log("Requesting permissions..");
    //         await Audio.requestPermissionsAsync();
    //         await Audio.setAudioModeAsync({
    //             allowsRecordingIOS: true,
    //             playsInSilentModeIOS: true,
    //         });
    //         console.log("Starting recording..");
    //         const { recording } = await Audio.Recording.createAsync(RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
    //         setRecording(recording);
    //         console.log("Recording started");
    //     } catch (err) {
    //         console.error("Failed to start recording", err);
    //     }
    // }

    // async function stopRecording() {
    //     console.log("Stopping recording..");
    //     setRecording(undefined);
    //     await recording.stopAndUnloadAsync();
    //     const uri = recording.getURI();
    //     console.log("Recording stopped and stored at", uri);
    //     console.log(recording)
    // }

    // --------------------------------------------------------------------------

    return (
        <>
            <TextWindow />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.buttonStyle} onPress={AudioRecord.start()}>
                    <Image source={require("../../img/start.png")} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    // след. строчка была от '@react-native-community/voice', тоже коряво работало вроде как. Voice.start() походу удалила
                    // onPress={() => Voice.stop}
                    onPress={AudioRecord.stop()}
                >
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
