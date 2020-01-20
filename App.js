import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import * as Font from "expo-font";

import {Block} from "./components";
import AppNavigator from './navigation/index';

class App extends React.Component {
    state = {
        fontsLoaded: false
    };

    loadFonts() {
        return Font.loadAsync({
            "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
            "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
            "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
            "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
            "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
        });
    }

    async componentDidMount() {
        await this.loadFonts();
        this.setState({fontsLoaded: true});
    }

    render() {
        if (!this.state.fontsLoaded) {
            if (!this.state.fontsLoaded) {
                return (
                    <Block center middle>
                        <Text>Hello</Text>
                        <Image
                            style={{width: 140, height: 140}}
                            source={require("./assets/icon.png")}
                        />
                    </Block>
                );
            }
        }
        return (
            <AppNavigator/>
        );
    }
}



export default App;
const styles = StyleSheet.create({
});