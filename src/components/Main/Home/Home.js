import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Header from './Header';
import ListImages from './ListImages/ListImages';
import About from './ListImages/About';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { wrapper, iconStyle } = styles;
        return (
            <View style={wrapper}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator
                    tabBarStyle={{ backgroundColor: '#103e4b' }}
                >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        selectedTitleStyle={{ color: '#34B089' }}
                        titleStyle={{ color: '#FFF', fontSize: 13 }}
                    >
                        <ListImages />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        selectedTitleStyle={{ color: '#34B089' }}
                        titleStyle={{ color: '#FFF', fontSize: 13 }}
                    >
                        <About />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#222222' },
    iconStyle: {
        width: 25,
        height: 25
    }
});
