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
            <View style={styles.WindowTextInputTextToSpeech}>
                <WindowTextInputMultiline value={value} onChangeText={onChangeText} />
            </View>
            <View style={styles.buttonDiv}>
                <TouchableOpacity style={styles.buttonStyle} onPress={handlePlayButtonClick}>
                    <Image source={require("../../img/start.png")} />
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
    WindowTextInputTextToSpeech: {
        alignItems: "center",
    },
    buttonDiv: {
        marginLeft: 20 
    },
});
