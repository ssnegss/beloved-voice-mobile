import { StyleSheet, Text } from "react-native";

export const HeaderNameComponent = (props) => {
    return <Text style={styles.pageName}>{props.header}</Text>;
};

const styles = StyleSheet.create({
    pageName: {
        fontSize: 25,
        color: "white",
        textAlign: "center",
        marginBottom: 25
    }
});