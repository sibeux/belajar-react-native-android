import React, { Component } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import Basic from './Udemy/Basic';

class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#f57c00" barStyle="light-content" />
        <View
          style={{
            backgroundColor: '#ff9800',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 8,
          }}>
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
            Welcome
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            style={{ width: 300, height: 300, backgroundColor: '#f57c00' }}
            // image offline
            // source={require('./src/image/image1.jpeg')}

            // image online
            source={{
              uri: 'https://raw.githubusercontent.com/sibeux/license-sibeux/MyProgram/image1.jpeg',
            }}
            resizeMode="contain"
          />

          <Image
            style={{ width: 300, height: 300, backgroundColor: '#f57c00', marginTop: 10}}
            // image offline
            source={require('./src/image/image1.jpeg')}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
}

export default App;
