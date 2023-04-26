import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
} from 'react-native';

import Basic from './Udemy/Basic';

class App extends Component<
  {},
  { header: string; value: boolean; username: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      header: 'Shopeepay',
      value: true,
      username: '',
    };
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
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

          <View style={{ width: 20 }} />

          <View>
            <Image
              style={{ width: 150, height: 150, backgroundColor: '#f57c00' }}
              // image offline
              source={require('./src/image/image1.jpeg')}
              resizeMode="cover" // default
            />
          </View>
        </View>

        <TextInput
          style={{
            borderWidth: 1,
            marginHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 5,
            borderRadius: 5,
            borderColor: '#f57c00',
            backgroundColor: 'white',
          }}
          value={this.state.username}
          onChangeText={value => this.setState({ username: value })}
        />

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
          onPress={() => console.log(this.state.username)}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Teks ini bisa diklik
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Switch
            value={this.state.value}
            onChange={() => this.setState({ value: !this.state.value })}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 300,
              height: 300,
              backgroundColor: '#f57c00',
            }}
            // image offline
            source={require('./src/image/image1.jpeg')}
            resizeMode="cover" // default
          />

          <Image
            style={{
              width: 300,
              height: 300,
              backgroundColor: '#f57c00',
            }}
            // image offline
            source={require('./src/image/image1.jpeg')}
            resizeMode="cover" // default
          />
        </View>
      </ScrollView>
    );
  }
}

export default App;
