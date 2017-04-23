import React, { Component } from 'react';
import { WebView, View, TouchableOpacity, Dimensions, Image, Text, StyleSheet } from 'react-native';

import icBack from '../../media/appIcon/back_white.png';

const { height } = Dimensions.get('window');

export default class Web extends Component {

    onBack() {
        const { navigator } = this.props;
        navigator.push({ name: 'MAIN' });
    }

    render() {
        const { url } = this.props;
        const { wrapper, titleStype, iconStyle } = styles;
        return (
            <View style={{ flex: 1 }}>
                <View style={wrapper}>
                    <TouchableOpacity onPress={this.onBack.bind(this)}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStype}>ForSexyLady</Text>
                    <View />
                </View>
                <WebView
                    source={{ uri: url }}
                    style={{ flex: 1 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 12,
        backgroundColor: '#234a55',
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 20
    },
    titleStype: {
        fontSize: 20,
        color: '#FFF'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    iconInfo: {
        fontSize: 18,
        color: '#FFF'
    }
});
