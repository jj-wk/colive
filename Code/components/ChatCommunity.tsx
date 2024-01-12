import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function ChatCommunity({ name, lastMessage }: { name: string, lastMessage: string }) {    
    return (
        <View style={styles.box}>
            <View style={styles.propertyContainer}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row'}}>
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
        marginBottom: 5,
    },
    propertyContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        paddingVertical: 4,
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
