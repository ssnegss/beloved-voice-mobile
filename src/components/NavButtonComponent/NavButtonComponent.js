import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

export const NavigationButtonComponent = (props) => {
    return (
            <TouchableOpacity style={styles.navButton} onPress={props.onPress}>
                <Image source={props.image} />
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    navButton: {
        backgroundColor: "rgba(370, 370, 370, 0.4)",
        alignItems: "center",
        padding: 15,
        marginTop:30,
        marginLeft: 10,
        marginRight:10,
        width: 70,
        marginBottom: 40,
        borderRadius: 50,
    },
});
