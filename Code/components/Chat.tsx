import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function Chat({ name, lastMessage }: { name: string, lastMessage: string }) {    
    return (
        <View style={styles.box}>
            <View style={styles.propertyContainer}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row'}}>
                    <Image
                        style={styles.tinyLogo}
                        source={{uri:"https://www.pngkey.com/png/detail/157-1579943_no-profile-picture-round.png"}}
                    />
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.lastMessage}>{lastMessage}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    box: {
        width: "100%",
        borderRadius: 10,
        marginBottom: 8,
    },
    propertyContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
    },
    title: {
        fontSize: 18,
    },
    lastMessage: {
        fontSize: 16,
        fontStyle: "italic",
    },
    tinyLogo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});
