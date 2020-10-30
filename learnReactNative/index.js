/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';

import Main from './src/redux_session_1/Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
