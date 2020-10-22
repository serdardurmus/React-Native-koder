/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';

import Router from './src/Navigation_sesseon_02/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
