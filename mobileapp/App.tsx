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
            color: 'rgb(255,0,0)',
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
            textDecorationLine: 'underline line-through',
            letterSpacing: 2
          }}>
          {' '}
          Hello World{' '}
        </Text>
      </View>
    );
  }
}

export default App;
