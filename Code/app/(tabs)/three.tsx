import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '../../components/Themed';
import Calendar from '../../components/Calendar';
import Event from '../../components/Event';

export default function TabThreeScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#eaf1df' }}>
      <View style={styles.container}>
        <View style={styles.background}/>
        <Calendar name="My Community"></Calendar>
        <View style={{ backgroundColor: '#eaf1df', alignItems: "flex-start", width: "90%" }}>
          <Text style={styles.title}>Your Upcoming Events</Text>
          <Event name="Evening Drinks" date="3 April 2023" location="Corner Pub" attendees={8}/>
          <Event name="Easter Egg Hunt" date="9 April 2023" location="Inner Courtyard" attendees={13}/>
          <Event name="Football Viewing" date="11 April 2023" location="Dan's Flat" attendees={4}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'stretch',
    marginTop: 22,
    marginBottom: 90,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    backgroundColor: '#eaf1df'
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
});
