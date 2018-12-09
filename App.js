import React, { Component } from 'react';
import AppNavigation from './src/navigation';
import {
  View, 
  StatusBar, 
  YellowBox
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Remote debugger', 'Module RCTImageLoader', 'Setting a timer']);
// console.ignoredYellowBox = [
//     'Setting a timer'
// ]
console.disableYellowBox = true;

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
