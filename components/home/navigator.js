import React from 'react';
import MainScreen from './main';
import InnovaManufacturerScreen from '../manufacturer/InnovaManufacturerScreen'
import LatitudeManufacturerScreen from '../manufacturer/LatitudeManufacturerScreen'
import DiscraftManufacturerScreen from '../manufacturer/DiscraftManufacturerScreen'
import DiscRoute from '../manufacturer/DiscRoute/DiscRoute'
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    Home: MainScreen,
    Innova: InnovaManufacturerScreen,
    Discraft: DiscraftManufacturerScreen,
    Latitude: LatitudeManufacturerScreen,
    DiscRoute: DiscRoute
  },
  {
    initialRouteName: 'Home'
  },
)