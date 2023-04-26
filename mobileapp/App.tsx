import React, { Component } from 'react';
import { Text, View, StatusBar} from 'react-native';
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
      </View>
    );
  }
}

export default App;
