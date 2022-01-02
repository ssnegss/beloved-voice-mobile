import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { WindowTextInputMultiline } from "../TextWindowComponent/TextWindowComponent";

export const WindowComponentRecordPlayback = () => {
    return (
        <>
            <WindowTextInputMultiline />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Image source={require("../../img/start.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
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
    }
});
