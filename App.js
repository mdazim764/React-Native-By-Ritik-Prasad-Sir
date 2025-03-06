import React from 'react';
import LifecycleComponent from './src/Basic/components/ClassComponents';
import {StyleSheet, View} from 'react-native';
import FunctionComponent from './src/Basic/components/FunctionComponent';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <LifecycleComponent /> */}
      <FunctionComponent />
      {/* <View style={styles.flex2} />
      <View style={styles.flex3} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
  },
  // flex2: {
  //   flex: 1,
  // },
  // flex3: {
  //   flex: 1,
  //   backgroundColor: 'green',
  // },
});

export default App;
