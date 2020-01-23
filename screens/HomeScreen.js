import React from 'react';
import {StyleSheet, Image, StatusBar,Button, ScrollView, TouchableOpacity} from 'react-native';
import * as theme from "../theme";
import {Block, Text} from "../components";
import * as mocks from "../mocks";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    renderHeader() {
        const {user} = this.props;
        return (
            <Block flex={0.42} column style={{paddingHorizontal: 15}}>
                <Block flex={false} row style={{paddingVertical: 15}}>
                    <Block center>
                        <Text h3 white style={{marginRight: -(25 + 5)}}>
                            Blood Requests
                        </Text>
                    </Block>
                    <Image style={styles.avatar} source={user.avatar}/>
                </Block>
                <Block card shadow color="white" style={styles.headerChart}>
                    <Block row space="between" style={{paddingHorizontal: 30}}>
                        <Block flex={false} row center>
                            <Text h1>291</Text>
                            <Text caption bold tertiary style={{paddingHorizontal: 10}}>
                                -12%
                            </Text>
                        </Block>
                        <Block flex={false} row center>
                            <Text caption bold primary style={{paddingHorizontal: 10}}>
                                +49%
                            </Text>
                            <Text h1>481</Text>
                        </Block>
                    </Block>
                    <Block
                        flex={0.5}
                        row
                        space="between"
                        style={{paddingHorizontal: 30}}
                    >
                        <Text caption light>
                            Available
                        </Text>
                        <Text caption light>
                            Requests
                        </Text>
                    </Block>
                    <Block>
                        {this.renderChart()}
                    </Block>
                </Block>
            </Block>
        );
    }

    renderChart() {
        const {chart} = this.props;
        return (
            <Text>Chaart</Text>
            // <LineChart
            //     style={{ height: 200 }}
            //     data={chart}
            //     svg={{ stroke: 'rgb(134, 65, 244)' }}
            //     contentInset={{ top: 20, bottom: 20 }}
            // >
            // </LineChart>
        )
    }

    renderRequest(request) {
        return (
            <Block row card shadow color="white" style={styles.request}>
                <Block
                    flex={0.25}
                    card
                    column
                    color="secondary"
                    style={styles.requestStatus}
                >
                    <Block flex={0.25} middle center color={theme.colors.primary}>
                        <Text small white style={{textTransform: "uppercase"}}>
                            {request.priority}
                        </Text>
                    </Block>
                    <Block flex={0.7} center middle>
                        <Text h2 white>
                            {request.bloodType}
                        </Text>
                    </Block>
                </Block>
                <Block flex={0.75} column middle>
                    <Button title={request.name}
                            onPress={() => this.props.navigation.navigate('DonorProfile', {request : request})}>
                        <Text h3 style={{paddingVertical: 8}}>
                            {request.name}
                        </Text>
                    </Button>
                    <Text caption semibold>
                        {request.age} • {request.gender} • {request.distance} km •{" "}
                        {request.time}
                    </Text>
                </Block>
            </Block>
        );
    }

    renderRequests() {
        const {requests} = this.props;
        return (
            <Block flex={0.8} color="gray2" style={styles.requests}>
                <Block flex={false} row space="between">
                    <Text light>Recent Updates</Text>
                    <Text semibold>View All</Text>
                </Block>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {requests.map(request => (
                        <TouchableOpacity activeOpacity={0.8} key={`request-${request.id}`}>
                            {this.renderRequest(request)}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </Block>
        );
    }

    render() {
        const {
            user,
            chart,
            request,
            props
        } = this.props;
        return (
            <Block style={styles.safe}>
                {this.renderHeader()}
                {this.renderRequests()}
            </Block>
        );
    }
}

HomeScreen.defaultProps = {
    user: mocks.user,
    requests: mocks.requests,
    chart: mocks.chart,
};

export default HomeScreen;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20
    },
    headerChart: {
        paddingTop: 30,
        paddingBottom: 30,
        zIndex: 1
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        marginRight: 5
    },
    drawer: {
        marginLeft: 5
    },
    requests: {
        marginTop: -55,
        paddingTop: 55 + 20,
        paddingHorizontal: 15,
        zIndex: -1
    },
    requestsHeader: {
        paddingHorizontal: 20,
        paddingBottom: 15
    },
    request: {
        padding: 20,
        marginBottom: 15
    },
    requestStatus: {
        marginRight: 20,
        overflow: "hidden",
        height: 90
    }
});
