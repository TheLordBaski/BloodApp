import React from 'react';
import {ExpoConfigView} from '@expo/samples';

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return <ExpoConfigView/>;
    }
}

InfoScreen.navigationOptions = {
    title: 'app.json',
};
