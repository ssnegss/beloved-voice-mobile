import { StyleSheet } from "react-native";
import Navigation from "./src/routes/Navigation";

export default function App() {
    return <Navigation />;
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
