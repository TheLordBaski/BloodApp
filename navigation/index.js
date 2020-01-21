import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";
import DonorProfileScreen from "../screens/DonorProfileScreen"
import HomeScreen from "../screens/HomeScreen"

const MainNavigator = createDrawerNavigator({
    Home: {screen: HomeScreen},
    DonorProfile: {screen: DonorProfileScreen}
});

/*
{
    defaultNavigationOptions: {
        headerShown: false,
    }
 */
const App = createAppContainer(MainNavigator);

export default App;