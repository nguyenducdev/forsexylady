import React, { Component } from 'react';
import { } from 'react-native';

import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Home from './Home/Home';

export default class Main extends Component {

    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        const { navigator } = this.props;
        return (
            <Drawer
                openDrawerOffset={0.4}
                tapToClose
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigator={navigator} />}
            >
                <Home open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
