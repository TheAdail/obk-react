import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { events, getEvents } from '../config/data';
import { formatDateTime } from '../config/utils';

class EventList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return getEvents()
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
//        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: responseJson.events,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
      <ScrollView>
        <List>
          {this.state.dataSource.map((event) => (
              <ListItem
                key={event.id}
                title={`${event.title}`}
                subtitle={`${formatDateTime(event.start_date)} - ${formatDateTime(event.end_date)}`}
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
