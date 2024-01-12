import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.background}/>
      <Image
          style={styles.tinyLogo}
          source={{uri:"https://www.pngkey.com/png/detail/157-1579943_no-profile-picture-round.png"}}
      />
      <Text style={styles.title}>My Profile</Text>
      <View style={{ width: "90%", backgroundColor: "#eaf1df" }}>
        <Text style={styles.subtitle}>My flat: </Text>
        <Text style={styles.para}>Holborn House 24C</Text>

        <Text style={styles.subtitle}>Housing preferences: </Text>
        <Text style={styles.para}>Pet friendly, fine with loud music, enjoy cooking together</Text>

        <Text style={styles.subtitle}>Languages: </Text>
        <Text style={styles.para}>English, Spanish, Portugese</Text>

        <Text style={styles.subtitle}>Email: </Text>
        <Text style={styles.para}>alan@email.com</Text>

        <View  style={{ marginTop: 20, backgroundColor: "#eaf1df" }}>
        <Pressable style={styles.button}><Text>Change App Language</Text></Pressable>
        <Pressable style={styles.dbutton}><Text  style={{ color: "#eaf1df" }}>Delete Account</Text></Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  para: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#c6d8a7",
    alignItems: "center",
    borderRadius: 4,
    width: "100%",
    height: 30,
    justifyContent: 'center',
    marginTop: 5,
  },
  dbutton: {
    backgroundColor: "red",
    alignItems: "center",
    borderRadius: 4,
    width: "100%",
    height: 30,
    justifyContent: 'center',
    marginTop: 5,
  }
});
