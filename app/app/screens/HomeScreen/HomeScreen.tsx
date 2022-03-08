import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import rootStyles from '../../rootStyles';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={rootStyles.text}>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
