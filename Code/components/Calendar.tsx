import React from 'react';
import { useState } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function Calendar({ name }: { name: string }) {    
    return (
        <View style={styles.box}>
            <View style={styles.propertyContainer}>
                <Text style={styles.title}>{name} Calendar</Text>
                <Image
                    style={styles.tinyLogo}
                    source={require("../assets/images/Calendar.png")}
                />
                <Pressable style={styles.button}><Text>Create new event</Text></Pressable>
            </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    box: {
        width: "90%",
        borderRadius: 10,
        marginBottom: 22,
    },
    propertyContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
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
        width: "100%",
        height: 30,
        justifyContent: 'center'
    }
});
