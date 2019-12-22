import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import Checkins from './pages/Checkins';
import HelpOrders from './pages/HelpOrders';

import theme from './styles/theme';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            Checkins,
            HelpOrders,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: theme.primary,
              inactiveTintColor: theme.textLight,
              style: {
                backgroundColor: theme.white,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'SignIn',
      }
    )
  );
