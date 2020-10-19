
import {AppRegistry} from 'react-native';
import App from './src/auth/Open';
import Navigation from './src/navigation/Index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
