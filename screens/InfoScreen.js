import React from 'react';
import {ExpoConfigView} from '@expo/samples';
import * as theme from "../theme";

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            color : "#fff",
        },

    };

    render() {
        return <ExpoConfigView/>;
    }
}

InfoScreen.navigationOptions = {
    title: 'app.json',
};
