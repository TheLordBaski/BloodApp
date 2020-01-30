import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import * as mocks from "../mocks";
import {Block, Text} from "../components";
import * as theme from "../theme";

class MapScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: theme.colors.primary,
        },
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff",
        },

    };

    renderHeader() {
        return (
            <Block flex={0.1} column style={{paddingHorizontal: 15}}>
                <Block flex={false} row style={{paddingVertical: 15}}>
                    <Block center>
                        <Text h3 white>
                            Miesta darovania
                        </Text>
                    </Block>
                </Block>
            </Block>
        );
    }

    render() {
        return (
            <Block style={styles.safe}>
                {this.renderHeader()}
                <Block style={styles.container}>
                    <MapView
                        ref={MapView => (this.MapView = MapView)}
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        loadingEnabled={true}
                        loadingIndicatorColor={theme.colors.accent}
                        loadingBackgroundColor="#eeeeee"
                        moveOnMarkerPress={false}
                        showsUserLocation={true}
                        showsCompass={true}
                        annotations={mocks.markers}
                        region={{
                            latitude: 48.6605193,
                            longitude: 19.547017,
                            latitudeDelta: 2.75,
                            longitudeDelta: 2.75,
                        }}
                    >
                        {mocks.markers.map((marker, i) => {
                            return <Marker
                                coordinate={marker.coordinate}
                                title={marker.title}
                                description={marker.subtitle}
                                key={i}
                            />
                        })}
                    </MapView>
                </Block>
            </Block>
        );
    }
}

export default MapScreen;

const styles = StyleSheet.create({

    safe: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20
    },
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: theme.colors.gray2,
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
