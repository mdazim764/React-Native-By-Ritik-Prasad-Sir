import React, {Component} from 'react';
import {View, Text} from 'react-native';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor: Component initialized');
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <View>
        <Text>Life Cycle Component</Text>
      </View>
    );
  }
}

export default LifecycleComponent;
