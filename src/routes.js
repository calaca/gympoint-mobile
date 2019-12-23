import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Checkins from './pages/Checkins';
import List from './pages/HelpOrders/List';
import Details from './pages/HelpOrders/Details';
import New from './pages/HelpOrders/New';

import theme from './styles/theme';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            Checkins,
            HelpOrders: {
              screen: createStackNavigator(
                {
                  List,
                  Details,
                  New,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
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
