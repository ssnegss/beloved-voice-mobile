import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import {RecordPlaybackPage} from "./src/pages/RecordPlaybackPage"
import {TextToSpeechPage} from "./src/pages/TextToSpeechPage"

export default function App() {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <Routes>
                    <Route exact path="/" element={<RecordPlaybackPage/>} />
                    <Route path="/toPlay" element={<TextToSpeechPage/>} />
                </Routes>
            </View>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
