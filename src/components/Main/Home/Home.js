import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Header from './Header';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
                <Header onOpen={this.openMenu.bind(this)} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#222222' }

});
