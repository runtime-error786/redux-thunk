/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { FG } from './H1';
import { Storee } from './Store';
import { FG1 } from './H2';

function App(): JSX.Element {
  return(
    <>
    <Provider store={Storee}>
      <FG></FG>
      <FG1></FG1>
    </Provider>
    </>
  )
}
export default App;
