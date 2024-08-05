import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>StarMap Screen!</Text>
                <WebView
                    scalesPageToFit = {true}
                    source = {{uri:path}}
                    style={{
                        marginTop: 20,
                        marginBottom:200,
                    }}
                />

                <TextInput
                  style={{height:40, borderColor:'gray', borderWidth:1}}
                  placeholder="ingresa la latitud"
                  placeholderTextColor = "#ffff#00000"
                  onChangeText={(text) => {
                    this.setState({
                        latitude: text
                    })
                  }}
                />
            </View>
        )
    }
}

const { longitude, latitude } = this.state;
const path = 'https://virtualsky.lco.global/embed/index.html?longitude = '