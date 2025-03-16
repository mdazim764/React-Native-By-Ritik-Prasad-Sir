import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const BasicComponents = () => {
  // alternative to SafeAreaView
  //it will give you the safe area insets
  //it need to install react-native-safe-area-context package
  const insets = useSafeAreaInsets();
  console.log(insets.top);
  console.log(insets.bottom);
  console.log(insets.left);
  console.log(insets.right);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text>BasicComponents</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default BasicComponents;
