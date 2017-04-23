import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const { wrapper, titleStype, iconStyle } = styles;
        return (
            <View style={wrapper}>
                <TouchableOpacity onPress={this.props.onOpen} style={{}}>
                    <Image source={icMenu} style={iconStyle} />
                </TouchableOpacity>
                <Text style={titleStype}>ForSexyLady</Text>
                <View />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 12,
        backgroundColor: '#234a55',
        padding: 10,
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    titleStype: {
        fontSize: 20,
        color: '#FFF',
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
