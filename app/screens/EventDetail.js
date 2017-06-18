import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Tile, List, ListItem } from 'react-native-elements';
import { formatDateTime } from '../config/utils';

class EventDetail extends Component {
  render() {
    const { id, title, description, start, finish } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Text style={{fontSize: 20}}>{title}</Text>
        <Text></Text>
        <Text style={{fontSize: 14}}>{`${formatDateTime(start)} - ${formatDateTime(finish)}`}</Text>
        <Text></Text>
        <Text style={{fontSize: 16}}>{description}</Text>
      </ScrollView>
    );
  }
}

export default EventDetail;
