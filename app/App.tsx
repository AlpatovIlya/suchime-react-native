import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {setCustomText} from 'react-native-global-props';
import {RootNavigator} from './app/navigators';
import combineReducers from './app/store/store';
import rootStyles from './app/rootStyles';
import {View} from 'react-native';
import {rootTheme} from './app/themes';

const store = createStore(combineReducers, applyMiddleware(thunk));

setCustomText({
  style: rootStyles.text,
});

const App = () => {
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          backgroundColor: rootTheme.colors.main,
        }}>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </View>
    </Provider>
  );
};

export default App;
