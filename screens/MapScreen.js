import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import * as mocks from "../mocks";
import {Block} from "../components";
import * as theme from "../theme";

export default class MapScreen extends React.Component {
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
        return (
            <Block style={styles.container}>
                <MapView
                    ref={MapView => (this.MapView = MapView)}
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    loadingEnabled = {true}
                    loadingIndicatorColor="#666666"
                    loadingBackgroundColor="#eeeeee"
                    moveOnMarkerPress={false}
                    showsUserLocation={true}
                    showsCompass={true}
                    //annotations={mocks.markers}
                    region={{
                        latitude: 48.6605193,
                        longitude: 19.547017,
                        latitudeDelta: 6.75,
                        longitudeDelta: 6.75,
                    }}
                >
                    {mocks.markers.forEach((element) => {
                        return (<Marker
                            coordinate={element.coordinate}
                            title={element.title}
                            description={element.subtitle}
                        />)
                    })}
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
