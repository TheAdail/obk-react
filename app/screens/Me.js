import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';
import { formatDate } from '../config/utils';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large}}
          featured
        />

        <Button
          title="Edit"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title="First Name"
            rightTitle={this.props.name.first}
            hideChevron
          />
          <ListItem
            title="Last Name"
            rightTitle={this.props.name.last}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Email"
            rightTitle={this.props.email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={this.props.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Working With Children Check No."
            rightTitle="123456"
            hideChevron
          />
          <ListItem
            title="WWCCN Status"
            rightTitle="Confirmed"
            hideChevron
          />
          <ListItem
            title="WWCCN Expiry Date"
            rightTitle="15/10/2020"
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Date of Birth"
            rightTitle={formatDate(this.props.dob, true)}
            hideChevron
          />
          <ListItem
            title="Gender"
            rightTitle={this.props.gender}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;
