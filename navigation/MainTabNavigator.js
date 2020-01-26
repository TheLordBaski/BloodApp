import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {TabBarIcon} from "../components";
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import InfoScreen from '../screens/InfoScreen';
import DonorProfileScreen from "../screens/DonorProfileScreen";

const config = Platform.select({

    defaultNavigationOptions: {
        headerShown: false,
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
        Links: MapScreen,
    },
    config
);

MapStack.navigationOptions = {
    defaultNavigationOptions: {
        headerShown: false,
    },
    tabBarLabel: 'Mapa',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-map'}/>
    ),
};

MapStack.path = '';

const InfoStack = createStackNavigator(
    {
        Settings: InfoScreen,
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

InfoStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    MapStack: MapStack,
    InfoStack: InfoStack,
});

tabNavigator.path = '';

export default tabNavigator;
