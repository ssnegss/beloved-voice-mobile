import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import { RecordPlaybackPage } from "./src/pages/RecordPlaybackPage";
import { TextToSpeechPage } from "./src/pages/TextToSpeechPage";
import Navigation from "./src/routes/Navigation";

export default function App() {
    return (
        <Navigation />
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });
