import React from 'react';
import {Button, StatusBar, StyleSheet} from 'react-native';
import {Block, Text} from "../components";
import * as theme from "../theme";

class DonorProfileScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color : "#fff",
        },

    };

    render() {
        const {navigation} = this.props;
        const request = navigation.getParam('request');
        return (
            <Block style={styles.safe}>
                <Block column style={styles.container}>
                    <Block flex={0.55} row card shadow color="white" style={styles.request}>
                        <Block
                            flex={0.25}
                            card
                            column
                            color="primary"
                            style={styles.requestStatus}
                        >
                            <Block flex={1} center middle>
                                <Text h1 bold white>
                                    {request.bloodType}
                                </Text>
                            </Block>
                        </Block>
                        <Block flex={0.75} column middle>
                            <Text h1 style={{marginTop: -8, color: "black"}}>
                                {request.name}
                            </Text>
                        </Block>
                    </Block>
                    <Block flex={3}>
                        <Block>
                            <Block flex={1} card center middle style={styles.moreInfo}>
                                <Text h1 bold style={{
                                    textTransform: "uppercase",
                                    color: theme.colors.primary
                                }}>{request.priority}</Text>
                            </Block>
                        </Block>
                        <Block>
                            <Block flex={1} card center middle style={styles.moreInfo}>
                                <Text h2 semibold>{request.bloodSubType}</Text>
                            </Block>
                        </Block>
                        <Block>
                            <Block flex={1} card center middle style={styles.moreInfo}>
                                <Text h3 semibold>{request.fenotype}</Text>
                            </Block>
                        </Block>
                        <Block>
                            <Block row space="between">
                                <Block card style={styles.moreInfo}>
                                    <Block row flex={1} center middle>
                                        <Block flex={3} center>
                                            <Text title bold>Age</Text>
                                        </Block>
                                        <Block flex={3} center>
                                            <Text h3>{request.age}</Text>
                                        </Block>
                                    </Block>
                                </Block>
                                <Block card style={styles.moreInfo}>
                                    <Block row flex={1} center middle>
                                        <Block flex={3} center>
                                            <Text title bold>Gender</Text>
                                        </Block>
                                        <Block flex={3} center>
                                            <Text h3>{request.gender}</Text>
                                        </Block>
                                    </Block>
                                </Block>

                            </Block>

                        </Block>

                        <Block>
                            <Block row space="between">
                                <Block card style={styles.moreInfo}>
                                    <Block row flex={1} center middle>
                                        <Block flex={3} center>
                                            <Text title bold>Location</Text>
                                        </Block>
                                        <Block flex={3} center>
                                            <Text h3>{request.city}</Text>
                                        </Block>
                                    </Block>
                                </Block>
                                <Block card style={styles.moreInfo}>
                                    <Block row flex={1} center middle>
                                        <Block flex={3} center>
                                            <Text title bold>Last update</Text>
                                        </Block>
                                        <Block flex={3} center>
                                            <Text h3>{request.time}</Text>
                                        </Block>
                                    </Block>
                                </Block>

                            </Block>

                        </Block>
                        <Block>
                            <Block row space="between">
                                <Block card style={styles.moreInfo}>
                                    <Block row flex={1} center middle>
                                        <Block flex={3} center>
                                            <Text title bold>Time added</Text>
                                        </Block>
                                        <Block flex={3} center>
                                            <Text h3>{request.time}</Text>
                                        </Block>
                                    </Block>
                                </Block>

                            </Block>

                        </Block>
                    </Block>
                </Block>
            </Block>
        );
    }
}

export default DonorProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray2,
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20
    },
    request: {
        backgroundColor: theme.colors.white,
        padding: 20,
        margin: 10,
        marginBottom: 15
    },
    requestStatus: {
        marginRight: 20,
        overflow: "hidden",
        height: 90
    },
    moreInfo: {
        backgroundColor: theme.colors.white,
        margin: 10,
        padding: 20,
    }
});