import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ alignContent: 'center', fontSize: 20, color: '#FFF' }}>Hello!</Text>
                <Text
                    style={{ alignContent: 'center', fontSize: 20, color: '#FFF' }}
                >Please send confirm to email "thedie2509@gmail.com"</Text>
                <Text
                    style={{ alignContent: 'center', fontSize: 20, color: '#FFF' }}
                >Thanks you!</Text>
            </View>
        );
    }
}
