import { StyleSheet, TouchableOpacity, Image } from "react-native";

export const NavigationButtonComponent = (props) => {
    return (
        <TouchableOpacity style={styles.navButton} onPress={props.onPress}>
            <Image source={props.image} style={styles.navButtonImage} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    navButton: {
        backgroundColor: "rgba(370, 370, 370, 0.4)",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        width: 60,
        height: 60,
        marginBottom: 25,
        borderRadius: 50,
    },
    navButtonImage: {
        width: 30,
        height: 30,
    },
});
