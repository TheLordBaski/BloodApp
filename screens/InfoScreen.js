import React from 'react';
import {ExpoConfigView} from '@expo/samples';

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return <ExpoConfigView/>;
    }
}

InfoScreen.navigationOptions = {
    title: 'app.json',
};
