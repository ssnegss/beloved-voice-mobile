import React from "react";
import { View, TextInput } from "react-native";

const WindowTextInput = (props) => {
    return <TextInput {...props} editable />;
};

export const WindowTextInputMultilineRecordPlayback = (props) => {
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
                    numberOfLines={6}
                    onChangeText={props.onValueChange}
                    value={props.value}
                    style={{ padding: 20 }}
                />
            </View>
        </>
    );
};
