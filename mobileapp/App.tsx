import React, {Component} from 'react';
import {Text, View} from 'react-native';

class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
            letterSpacing: 2,
          }}>
          {' '}
          <Text
            style={{color: 'rgb(255,0,0)', textDecorationLine: 'line-through'}}>
            Hello
          </Text>
          <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
            World
          </Text>{' '}
        </Text>
      </View>
    );
  }
}

export default App;
