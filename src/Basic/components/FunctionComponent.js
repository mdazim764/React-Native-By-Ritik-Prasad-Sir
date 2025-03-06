import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const FunctionComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component did mount');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    if (count == 5) {
      Alert.alert('Count is 5');
    }
  }, [count]);
  return (
    <View style={styles.component}>
      <SafeAreaView />
      <Text style={styles.text}>FunctionComponent count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    Colors: 'White',
    weight: 'bold',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default FunctionComponent;
