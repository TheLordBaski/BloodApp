import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import * as mocks from "../mocks";
import {Block, Text} from "../components";
import * as theme from "../theme";

const KML_FILE = 'https://www.google.com/maps/d/u/0/kml?mid=1Ae2OJZ16Ptbuzd2UOr6GHMKZBOJ7HfOp&forcekml=1';

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

    constructor(props) {
        super(props);
        this.onKmlReady = this.onKmlReady.bind(this);
    }

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

    onKmlReady() {
        this.map.fitToElements(true);
        console.log("Kml loaded");
    }

    render() {
        return (
            <Block style={styles.safe}>
                {this.renderHeader()}
                <Block style={styles.container}>
                    <MapView
                        ref={ref => {
                            this.map = ref;
                        }}
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        loadingEnabled={true}
                        loadingIndicatorColor={theme.colors.accent}
                        loadingBackgroundColor="#eeeeee"
                        region={{
                            latitude: 48.6605193,
                            longitude: 19.547017,
                            latitudeDelta: 2.75,
                            longitudeDelta: 2.75,
                        }}
                        kmlSrc={KML_FILE}
                        onKmlReady={this.onKmlReady}
                    />

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
