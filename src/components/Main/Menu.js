import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default class Menu extends Component {

    openBlog() {
        const { navigator } = this.props;
        navigator.push({ name: 'WEB', url: 'http://blog.forsharing.info' });
    }

    openTumblr() {
        const { navigator } = this.props;
        navigator.push({ name: 'WEB', url: 'https://forsexylady.tumblr.com' });
    }

    openFacebook() {
        const { navigator } = this.props;
        navigator.push({ name: 'WEB', url: 'https://www.facebook.com/ShareAndLearning/' });
    }

    render() {
        const { wapper, rowLogo, textLogo, row, rowLink } = styles;
        return (
            <View style={wapper}>
                <View style={rowLogo}>
                    <Text style={textLogo}>ForSexyLady</Text>
                </View>
                <View style={rowLink}>
                    <TouchableOpacity onPress={this.openBlog.bind(this)}>
                        <Text style={row}>Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.openTumblr.bind(this)}>
                        <Text style={row}>Tumblr</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.openFacebook.bind(this)}>
                        <Text style={row}>Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wapper: {
        flex: 1,
        backgroundColor: '#103e4b',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.8,
    },
    rowLogo: {
        height: height / 9,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#0d313a'
    },
    textLogo: {
        color: '#FFF',
        fontSize: 20,
        alignContent: 'center'
    },
    rowLink: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: '#0d313a'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        color: '#FFF',
        fontSize: 16,
        paddingLeft: 20
    },

});
