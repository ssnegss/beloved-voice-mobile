import React from "react";
import { View, Button, Image, TouchableOpacity, StyleSheet } from "react-native";
import { WindowTextInputMultiline } from "../TextWindowComponent/TextWindowComponent";
import * as Speech from "expo-speech";

export const WindowComponentTextToSpeech = () => {
    const [value, onChangeText] = React.useState("");

    const handlePlayButtonClick = () => {
        Speech.speak(value, { language: "ru" });
    };

    return (
        <>
            <WindowTextInputMultiline value={value} onChangeText={onChangeText} />
            <TouchableOpacity style={styles.buttonStyle} onPress={handlePlayButtonClick}>
                <Image source={require("../../img/start.png")} />
            </TouchableOpacity>
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
