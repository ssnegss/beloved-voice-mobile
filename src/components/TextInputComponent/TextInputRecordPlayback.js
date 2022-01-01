import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

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
        backgroundColor: '#000',
    },
});

export default WindowTextInputMultiline;
