import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function Event({ name, date, location, attendees }: { name: string, date: string, location: string, attendees: number }) {    
    return (
        <View style={styles.box}>
            <View style={styles.propertyContainer}>
                <Text style={styles.title}>{name}</Text>
                <View style={{ justifyContent: "flex-start", flexDirection: 'row' }}>
                    <FontAwesome name="calendar" size={24} color="black" />
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', }}>
                    <FontAwesome name="location-arrow" size={24} color="black" />
                    <Text style={styles.date}>{location}</Text>
                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 7 }}>
                    <Pressable style={styles.button}><Text>I'm coming!</Text></Pressable>
                    <Pressable style={styles.button}><Text>Can't make it.</Text></Pressable>
                </View>

                <Text style={styles.attendees}>{attendees} people are going.</Text>
            </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    box: {
        width: "100%",
        borderRadius: 10,
        marginBottom: 14,
    },
    propertyContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
    },
    title: {
        fontSize: 22,
        marginBottom: 5,
    },
    date: {
        fontSize: 20,
        fontStyle: "italic",
        marginLeft: 10,
    },
    attendees: {
        fontSize: 15,
        marginTop: 7,
    },
    tinyLogo: {
        marginVertical: 10,
        width: 330,
        height: 220,
    },
    button: {
        backgroundColor: "#c6d8a7",
        alignItems: "center",
        borderRadius: 4,
        width: "48%",
        height: 30,
        justifyContent: 'center'
    }
});
