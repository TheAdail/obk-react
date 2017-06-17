import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { events } from '../config/data';

class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {events.map((event) => (
            <ListItem
              key={event.id}
              title={`${event.title}`}
              subtitle={`${event.start} - ${event.finish}`}
              onPress={() => this.onLearnMore(event)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Feed;
