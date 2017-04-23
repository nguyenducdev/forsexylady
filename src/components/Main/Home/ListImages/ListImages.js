import React, { Component } from 'react';
import { View, Text, ListView, RefreshControl, Image } from 'react-native';

export default class ListImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            page: 0,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        };
    }

    componentDidMount() {
        //load data
        fetch('http://localhost:8000/data/0')
            .then((response) => response.json())
            .then((responseJson) => {
                arrayData = responseJson;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(arrayData),
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //load data new
    onRefresh = () => {
        this.setState({
            refreshing: true,
            page: 0
        });
        arrayData = [];
        //data load new
        setTimeout(() => {
            // prepend 10 items
            fetch('http://localhost:8000/data/0')
                .then((response) => response.json())
                .then((responseJson) => {
                    arrayData = responseJson;
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(arrayData),
                        refreshing: false
                    });
                })
                .catch((error) => {
                    console.error(error);
                });

            this.setState({
                refreshing: false
            });
        }, 1000);
    }

    //data load more 
    onEndReached() {
        fetch('http://localhost:8000/data/' + (this.state.page + 1))
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.length !== 0) {
                    arrayData = arrayData.concat(responseJson);
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(arrayData),
                        page: this.state.page + 1
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{ paddingTop: 10 }}>
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={
                                this.state.refreshing
                            }
                            onRefresh={
                                this.onRefresh.bind(this)
                            }
                            tintColor="#FFF"
                            title="Loading..."
                            titleColor="#FFF"
                        />
                    }

                    onEndReached={
                        this.onEndReached.bind(this)
                    }
                    onEndReachedThreshold={5}

                    dataSource={this.state.dataSource}
                    renderRow={(r) =>
                        <View style={{ padding: 20, borderWidth: 1 }}>
                            <Text>{r.Id}</Text>
                            <Image source={{ uri: r.Hinh }} style={{ width: 70, height: 100 }} />
                            <Text style={{ padding: 20, borderWidth: 1 }}>{r.Ten}</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}
