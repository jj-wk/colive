import React from 'react';
import { useState } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function Property({ name, ammenities, price, image }: { name: string, ammenities: string, price: Float, image: number }) {
    let flatImages = [require("../assets/images/flat1.jpeg"), require("../assets/images/flat2.jpeg"), require("../assets/images/flat3.jpeg")];
    const my_variable = require('../assets/images/flat1.jpeg');


    return (
        <View style={styles.box}>
            <View style={styles.propertyContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={flatImages[image]}
                />
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.ammenities}>{ammenities}</Text>
                <Text style={styles.price}>{price}£ per month</Text>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                    <Pressable style={styles.button}><Text>Show interest</Text></Pressable>
                    <Pressable style={styles.button}><Text>Meet others</Text></Pressable>
                </View>
                <Pressable style={styles.landButton}><Text>Contact Landlord</Text></Pressable>
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
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 5,
    },
    ammenities: {
        fontSize: 20,
        fontWeight: "normal"
    },
    price: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 25,
        fontStyle: "italic"
    },
    tinyLogo: {
        width: 330,
        height: 200,
    },
    button: {
        backgroundColor: "#c6d8a7",
        alignItems: "center",
        borderRadius: 4,
        width: "48%",
        height: 30,
        justifyContent: 'center'
    },
    landButton: {
        backgroundColor: "#c6d8a7",
        alignItems: "center",
        borderRadius: 4,
        width: "100%",
        height: 30,
        justifyContent: 'center',
        marginTop: 10,
    }
});
