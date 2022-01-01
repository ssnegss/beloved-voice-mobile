import React from "react";
import { View, TextInput, Button } from "react-native";

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
                    <Button title="1"></Button>
                    <Button title="1"></Button>
                    <Button title="1"></Button>
                    <Button title="1"></Button>

            </View>
        </>
    );
};

export default WindowTextInputMultiline;
