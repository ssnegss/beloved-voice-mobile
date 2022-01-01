import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import RecordPlaybackPage from "../pages/RecordPlaybackPage";
import TextToSpeechPage from "../pages/TextToSpeechPage";

const screens = {
    RecordPlaybackPage: {
        screen: RecordPlaybackPage,
        navigationOptions: {
            title: "Record / Playback Page",
            headerLeft: null
        },
    },
    TextToSpeechPage: {
        screen: TextToSpeechPage,
        navigationOptions: {
            title: "Text to speech page",
            headerLeft: null
        }
    },
};

const AppNavigation = createStackNavigator(screens);

export default createAppContainer(AppNavigation);
