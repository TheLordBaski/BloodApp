import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {Text} from "../components";
import {Block} from "../components";

export default class MapScreen extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <Block style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 48.6605193,
                        longitude: 19.547017,
                        latitudeDelta: 6.75,
                        longitudeDelta: 6.75,
                    }}
                >
                </MapView>
            </Block>
        );
    }
}

MapScreen.navigationOptions = {
    title: 'Map',
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
