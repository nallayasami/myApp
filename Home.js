import React from 'react';
import {
    createStackNavigator,
} from 'react-navigation';
import Page from './Page';
import Video from './VideoPlayer';


const Home = createStackNavigator({
    Home: {
        screen: Page
    },
    Video: {
        screen: Video
    },
});

export default Home;