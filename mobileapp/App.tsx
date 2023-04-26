import React, { Component } from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import Basic from './Udemy/Basic';

class App extends Component<{}, { header: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      header: 'Shopeepay',
    };
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
            {this.state.header}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <Image
            style={{ width: 150, height: 150, backgroundColor: '#f57c00' }}
            // image online
            source={{
              uri: 'https://raw.githubusercontent.com/sibeux/license-sibeux/MyProgram/image1.jpeg',
            }}
            resizeMode="contain"
          />

          <View style={{ width: 20, backgroundColor: '#000' }} />

          <View>
            <Image
              style={{ width: 150, height: 150, backgroundColor: '#f57c00' }}
              // image offline
              source={require('./src/image/image1.jpeg')}
              resizeMode="cover" // default
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 300,
            backgroundColor: '#f57c00',
            marginTop: 20,
            paddingVertical: 10,
            borderRadius: 40,
            elevation: 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onPress={() => console.log('hello')}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Teks ini bisa diklik
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
