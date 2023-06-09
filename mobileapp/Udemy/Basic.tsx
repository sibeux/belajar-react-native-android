import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Basic extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
            letterSpacing: 2,
          }}>
          <Text
            style={{color: 'rgb(255,0,0)', textDecorationLine: 'line-through'}}>
            Hello
          </Text>
          <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
            World
          </Text>
        </Text>

        <View
          style={{
            // width: 50,
            // height: 50,
            flex: 0.5,
            backgroundColor: 'cyan',
            // marginLeft: 30,
            // paddingTop: 5,
            marginHorizontal: 20,
            marginVertical: 30,
            // paddingLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',

            flexDirection: 'column-reverse',
            // flexDirection: 'row',
          }}>
          <Text>{'sibe A'}</Text>
          <Text>{'sibe B'}</Text>
          <Text>{'sibe C'}</Text>
          <Text>{'sibe D'}</Text>
        </View>
      </View>
    );
  }
}

export default Basic;
