import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const WindowTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
        />
    );
};

const WindowTextInputMultiline = () => {
    const [value, onChangeText] = React.useState("");

    // If you type something in the text box that is a color, the background will change to that
    // color.
    return (
        <>
            <View
                style={{
                    borderBottomColor: "#000000",
                    borderBottomWidth: 1,
                    width: "90%",
                }}
            >
                <WindowTextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    style={{ padding: 10 }}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.buttonStyle}>
                    <Button title="1" />
                </View>
                <View style={styles.buttonStyle}>
                    <Button title="2" />
                </View>
                <View style={styles.buttonStyle}>
                    <Button title="3" />
                </View>
                <View style={styles.buttonStyle}>
                    <Button title="4" />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 15,
    },
});

export default WindowTextInputMultiline;
