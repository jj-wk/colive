import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Chat from '../../components/Chat';
import ChatCommunity from '../../components/ChatCommunity';

export default function Index() {
  return (
    <ScrollView style={{ backgroundColor: '#eaf1df' }}>
      <View style={styles.container}>
        <View style={styles.background}/>
        <View style={{ backgroundColor: '#eaf1df', alignItems: "flex-start", width: "90%" }}>
          <Text style={styles.title}>Community Chat</Text>
        </View>
        <View style={styles.box}>
          <ChatCommunity name="Stephen" lastMessage="Yesterday was great thanks!"/>
          <ChatCommunity name="Garret" lastMessage="I found a bag in front of the building, do..."/>
          <ChatCommunity name="Anna" lastMessage="That may be mine! Can I pick it up later?"/>
        </View>


        <View style={{ backgroundColor: '#eaf1df', alignItems: "flex-start", width: "90%", marginTop: 12 }}>
          <Text style={styles.title}>Private Chats</Text>
        </View>

        <View style={{ backgroundColor: '#eaf1df', alignItems: "flex-start", width: "90%" }}>
        <Chat name="Anna" lastMessage="Yea for sure! I'm looking for a flat whe..."/>
        <Chat name="Thomas" lastMessage="I don't have any pets myself."/>
        <Chat name="James" lastMessage="I saw you're interested in the flat on B..."/>
        <Chat name="Janice" lastMessage="Sure take your time! Let me know wh..."/>
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
  box: {
    width: "90%",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 15,
    paddingBottom: 7,
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
