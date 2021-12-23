import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes, Link } from "react-router-native";

const RecordPlayback = () => <Text>RecordPlayback</Text>;

const TextToSpeechPage = () => <Text>TextToSpeechPage</Text>;

export default function App() {
    return (
        <NativeRouter>
            <View style={styles.container}>
                {/* <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" /> */}

                <Routes>
                    <Route exact path="/" element={<RecordPlayback/>} />
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
