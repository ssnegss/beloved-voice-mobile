import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import RecordPlaybackPage from "../pages/RecordPlaybackPage";
import TextToSpeechPage from "../pages/TextToSpeechPage";

const screens = {
    RecordPlaybackPage: {
        screen: RecordPlaybackPage,
        navigationOptions: {
            headerShown: false,
            headerLeft: () => null,
            tabBarVisible: false,
        },
    },
    TextToSpeechPage: {
        screen: TextToSpeechPage,
        navigationOptions: {
            headerShown: false,
            headerLeft: () => null,
        },
    },
};

const AppNavigation = createStackNavigator(screens);

export default createAppContainer(AppNavigation);
