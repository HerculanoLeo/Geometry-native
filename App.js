import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Home } from './src/screens/home';

const navigator = createStackNavigator({
  'Geometry Native': {screen: Home},
});

const AppContainer = createAppContainer(navigator)

const App = () => {
  return(
    <AppContainer />
  )
};

export default App;