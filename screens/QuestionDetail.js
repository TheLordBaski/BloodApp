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

    constructor(props) {
        super(props);
        this.state = {dict: []}
    }


    renderHeader(title) {
        const {user} = this.props;
        return (
            <Block flex={0.1} column style={{paddingHorizontal: 15}}>
                <Block flex={false} row style={{paddingVertical: 15}}>
                    <Block center>
                        <Text h3 white>
                            {title}
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
                {this.renderHeader(item.title)}
                <Block style={styles.textContainer}>
                    <ScrollView>
                        {item.questions.map((questionDetail, i) => {
                            return <Question questionDetail i/>
                        })}
                    </ScrollView>
                </Block>
            </Block>
        )
    }
}

export default QuestionDetail;

class Question extends React.Component {

    state = {
        toggle: true
    };


    render() {
        const {
            i,
            questionDetail
        } = this.props;
        console.log(questionDetail);
        return (
            <Block card style={{margin: 5}} key={i}>
                <Button
                    title={questionDetail.question + { x}}
                    onPress={() => {
                        console.log(this.state.toggle);
                        this.setState({
                            toggle: !state.toggle
                        })
                    }}
                />
                {this.state.toggle &&
                <Text >
                    {questionDetail.answer}
                </Text>}
            </Block>

        )
    }
}

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