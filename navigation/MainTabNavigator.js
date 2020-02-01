import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {TabBarIcon} from "../components";
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import InfoScreen from '../screens/InfoScreen';
import QuestionDetail from '../screens/QuestionDetail';
import DonorProfileScreen from "../screens/DonorProfileScreen";
import * as theme from "../theme";

const config = Platform.select({

    defaultNavigationOptions: {
        headerShown: false,
        headerStyle: {
            backgroundColor: theme.colors.accent,
        },
        headerTintColor: theme.colors.accent,
    },
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        DonorProfile: {screen: DonorProfileScreen}
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Domov',

    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-home'
            }
        />
    ),
};

HomeStack.path = '';

const MapStack = createStackNavigator(
    {
        Map: MapScreen,
    },
    config
);

MapStack.navigationOptions = {
    tabBarLabel: 'Mapa',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-map'}/>
    ),
};

MapStack.path = '';

const InfoStack = createStackNavigator(
    {
        Info: InfoScreen,
        QuestionDetail: QuestionDetail
    },
    config
);

InfoStack.navigationOptions = {
    defaultNavigationOptions: {
        headerShown: false,
    },
    tabBarLabel: 'Informácie',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'}/>
    ),
};


const tabNavigator = createBottomTabNavigator({
    HomeStack: HomeStack,
    MapStack: MapStack,
    InfoStack: InfoStack,
});

tabNavigator.path = '';

export default tabNavigator;
