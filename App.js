import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import { RecordPlaybackPage } from "./src/pages/RecordPlaybackPage";
import { TextToSpeechPage } from "./src/pages/TextToSpeechPage";
import Navigation from "./src/routes/Navigation";

export default function App() {
    return (
        // <ImageBackground source={require("./src/img/bcg.png")} style={styles.image}>
            <Navigation />
        // {/* </ImageBackground> */}
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});
