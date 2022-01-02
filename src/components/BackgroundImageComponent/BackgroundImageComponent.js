import { StyleSheet, ImageBackground, Dimensions } from "react-native";

export const ImageBackgroundComponent = ({ children }) => {
    return (
        <ImageBackground source={require("../../img/bcg.png")} style={styles.backgroundImage}>
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        position: "absolute",
        left: 0,
        top: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
