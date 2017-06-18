import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { events, getEvents } from '../config/data';
import { formatDateTime } from '../config/utils';

class EventList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false
    }
  }

  refreshData() {
    return getEvents()
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          refreshing: false,
          dataSource: responseJson.events,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.refreshData();
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.refreshData();
  }

  onDetails = (event) => {
    this.props.navigation.navigate('Details', { ...event });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
        <List>
          {this.state.dataSource.map((event) => (
              <ListItem
                key={event.id}
                title={`${event.title}`}
                subtitle={`${formatDateTime(event.start)} - ${formatDateTime(event.finish)}    Spots: ${event.spots_left}`}
                onPress={() => this.onDetails(event)}
              />
            ))
          }
        </List>
      </ScrollView>
    );


//    getEvents().then(function(events) {
      // return (
      //   <ScrollView>
      //     <List>
      //       {events.map((event) => (
      //         <ListItem
      //           key={event.id}
      //           title={`${event.title}`}
      //           subtitle={`${event.start} - ${event.finish}`}
      //           onPress={() => this.onDetails(event)}
      //         />
      //       ))}
      //     </List>
      //   </ScrollView>
      // );
//      });
  }
}

export default EventList;
