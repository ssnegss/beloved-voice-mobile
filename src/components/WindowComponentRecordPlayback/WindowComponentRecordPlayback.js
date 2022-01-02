import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { WindowTextInputMultiline } from "../TextWindowComponent/TextWindowComponent";

export const WindowComponentRecordPlayback = () => {
    return (
        <>
            <WindowTextInputMultiline />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text>4</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 7,
        height: 40,
        width: 40,
        backgroundColor: "#000",
    },
});
