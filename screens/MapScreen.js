import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import * as mocks from "../mocks";
import {Block} from "../components";
import MapMarker from "react-native-maps/lib/components/MapMarker";

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
                    annotations={mocks.markers}
                    region={{
                        latitude: 48.6605193,
                        longitude: 19.547017,
                        latitudeDelta: 6.75,
                        longitudeDelta: 6.75,
                    }}
                >
                    <MapMarker

                    >

                    </MapMarker>
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
