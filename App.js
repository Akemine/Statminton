
import React from 'react';

import { Provider } from 'react-redux'
import Store from './Store/configureStore'

import Search from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmDetail from './components/FilmDetail';
import Grille from './components/Grille';
import Test from './components/Test';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
    // <Provider store={Store}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Search" component={Search} />
    //       <Stack.Screen name="Detail" component={FilmDetail} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>
    <Test/>
    )
}

export default App;