import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export const NavBarComponent = (props) => {
    return (
        <View style={styles.navButtonDiv}>
            <TouchableOpacity style={styles.navButton} onPress={props.onPress}>
                <Text>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navButton: {
        backgroundColor: "rgba(370, 370, 370, 0.4)",
        alignItems: "center",
        width: "40%",
        padding: 15,
        marginTop: 20,
        marginBottom: 40,
        borderRadius: 50,
    },
    navButtonDiv: {
        justifyContent: "center",
        alignItems: "center",
    }
});