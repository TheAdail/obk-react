import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Text, Tile, List, ListItem, Button } from 'react-native-elements';
import { formatTime, formatDate } from '../config/utils';

class EventDetail extends Component {
  render() {
    const { id, title, description, start, finish, spots_left } = this.props.navigation.state.params;

    return (
      <ScrollView style={{margin: 20}}>
        <Image
          source={{ uri: 'https://static.wixstatic.com/media/7660f4_8443947fe5984d639792776ab9e01e28~mv2.gif'}}
          style={{height: 120, width: 180}}
        />
        <Text></Text>
        <Text></Text>
        <Text style={{fontSize: 20, color: 'blue'}}>{title}</Text>
        <Text></Text>
        <Text style={{fontSize: 16}}>Date {`${formatDate(start)}`}</Text>
        <Text style={{fontSize: 16}}>Time {`${formatTime(start)} - ${formatTime(finish)}`}</Text>
        <Text></Text>
        <Text style={{fontSize: 16}}>Volunteers spot left: {`${spots_left}`}</Text>
        <Text></Text>
        <Text></Text>
        <Text>Detailed Description of the Event</Text>
        <Text></Text>
        <Text style={{fontSize: 16}}>{description}</Text>
        <Text></Text>
        <Text></Text>
        <Button title='Join' />        
      </ScrollView>
    );
  }
}

export default EventDetail;
