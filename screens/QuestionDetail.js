import React from 'react';
import * as theme from "../theme";
import {Block, Text} from "../components";
import {Image, StatusBar, StyleSheet, ScrollView, Button} from "react-native";
import {help} from "../mocks"

class QuestionDetail extends React.Component {

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
        const {user} = this.props;
        return (
            <Block flex={0.1} column style={{paddingHorizontal: 15}}>
                <Block flex={false} row style={{paddingVertical: 15}}>
                    <Block center>
                        <Text h3 white>
                            Informácie
                        </Text>
                    </Block>
                </Block>
            </Block>
        );
    }

    render() {
        const {navigation} = this.props;
        const item = navigation.getParam('item');
        return (
            <Block style={styles.safe}>
                {this.renderHeader()}
                <Block style={styles.textContainer}>
                    <ScrollView>
                        {item.questions.map((questionDetail, i) => {
                            return <Block card style={{margin: 5}} key={i}>
                                <Text h3 center>
                                    {questionDetail.question}
                                </Text>
                                <Text>
                                    {questionDetail.answer}
                                </Text>
                            </Block>
                        })}
                    </ScrollView>
                </Block>
            </Block>
        )
    }
}

export default QuestionDetail;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20
    },
    textContainer: {
        backgroundColor: theme.colors.white
    }
});