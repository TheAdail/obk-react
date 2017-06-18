import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import EventList from '../screens/EventList';
import Settings from '../screens/Settings';
import EventDetail from '../screens/EventDetail';
import Me from '../screens/Me';

export const MainStack = StackNavigator({
  EventList: {
    screen: EventList,
    navigationOptions: {
      title: 'Events',
    },
  },
  Details: {
    screen: EventDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: MainStack,
    navigationOptions: {
      tabBarLabel: 'Events',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
