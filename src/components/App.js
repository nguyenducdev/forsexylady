import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';

import Main from './Main/Main';
import Web from './Main/Web';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'WEB': return <Web navigator={navigator} url={route.url} />;
                        default: return <Main navigator={navigator} />;
                    }
                }}
                configureScene={route => {
                    if (route.name === 'MAIN') {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                    return Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}
