import React from "react";
import { View, TextInput} from "react-native";

const WindowTextInput = (props) => {
    return (
        <TextInput
            {...props}
            editable
        />
    );
};

export const WindowTextInputMultiline = () => {
    const [value, onChangeText] = React.useState("");

    return (
        <>
            <View
                style={{
                    borderBottomColor: "#000000",
                    borderBottomWidth: 1,
                    width: "90%"
                }}
            >
                <WindowTextInput
                    multiline
                    numberOfLines={6}
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    style={{ padding: 20 }}
                />
            </View>
        </>
    );
};