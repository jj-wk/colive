import { StyleSheet, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import EditScreenInfo from '../../components/EditScreenInfo';
import Property from '../../components/Property';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  const [text, onChangeText] = useState('My Location');
  const [text2, onChangeText2] = useState('');

  return (
    <ScrollView style={{ backgroundColor: '#eaf1df' }}>
      <View style={styles.container}>
        <View style={styles.background}/>

        <View style={{ backgroundColor: '#eaf1df', alignItems: "flex-start", width: "90%" }}>
          <Text style={styles.title}>Filter results:</Text>
        </View>
        <View style={{ justifyContent: "flex-start", flexDirection: 'row', alignItems: "center", backgroundColor: '#eaf1df' }}>
          <FontAwesome name="map-marker" size={24} color="black" />
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          />
        </View>
        <TextInput
          style={styles.input2}
          onChangeText={onChangeText2}
          value={text2}
          placeholder="Add amenities"
        />

        <Property name="Holborn House" ammenities="Pet friendy, Wifi, Kitchen, Own Bathroom, Parking" price={950} image={0} />
        <Property name="Westbourne Park Community Flat" ammenities="Wifi, Courtyard, Shared Bathroom, Parking, Near Tube Station, Laundry" price={579} image={1} />
        <Property name="Stratford Big Housing" ammenities="Wifi, Ensuite, Near Westfield, On Site Gym, Common Room, Laundry" price={660} image={2} />
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  input2: {
    height: 40,
    width: "83.5%",
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
