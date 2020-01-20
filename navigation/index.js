import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import DonorProfileScreen from "../screens/DonorProfileScreen"
import HomeScreen from "../screens/HomeScreen"

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    DonorProfile : {screen : DonorProfileScreen}
}, {
    defaultNavigationOptions: {
        headerShown: false,
    }
});

const App = createAppContainer(MainNavigator);

export default App;