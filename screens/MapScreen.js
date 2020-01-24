import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text} from "../components";

export default class MapScreen extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Here wsda l be map</Text>
            </ScrollView>
        );
    }
}

MapScreen.navigationOptions = {
    title: 'Map',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
