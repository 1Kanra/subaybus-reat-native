/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-get-random-values';
import App from './App';
import {name as appName} from './app.json';
import AppWrapper from './AppWrapper'

AppRegistry.registerComponent(appName, () => AppWrapper);
