import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const { id, title, description, start, finish } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Text style={{fontSize: 20}}>{title}</Text>
        <Text></Text>
        <Text style={{fontSize: 14}}>{`${start} - ${finish}`}</Text>
        <Text></Text>
        <Text style={{fontSize: 16}}>{description}</Text>
      </ScrollView>
    );
  }
}

export default UserDetail;
