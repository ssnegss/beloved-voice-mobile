import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { RecordPlaybackPage } from "../pages/RecordPlaybackPage"
import { TextToSpeechPage } from "../pages/TextToSpeechPage"

const screens = {
    RecordPlaybackPage: {
        screen: RecordPlaybackPage
    },
    TextToSpeechPage: {
        screen: TextToSpeechPage
    }
}

const AppNavigation = createStackNavigator(screens);

export default createAppContainer(AppNavigation);