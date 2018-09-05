import { AppRegistry, YellowBox } from 'react-native';
import Home from './Home';

AppRegistry.registerComponent('myApp', () => Home);


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);