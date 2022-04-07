import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import { RenderItemChoose } from './RenderChoose';

export const Header = ({year = 2022, month = 1, hour = 0, minites = '00', setMonth = () => { }, setYear = () => {} }) => {
    const deCreaseMonth = () => {
        if (month > 1) {
            setMonth(month - 1)
        } else {
            setMonth(12)
            setYear(year - 1)
        }
    }
    const inCreaseMonth = () => {
        if (month < 12) {
            setMonth(month + 1)
        } else {
            setMonth(1)
            setYear(year +1)
        }
    }
    return (
        <View style={styles.header}>
            <View style={styles.headerDay}>
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={deCreaseMonth}>
                    <Icon name="chevron-left" size={16} color="black" />
                </TouchableOpacity >
                <Text>{month}, {year}</Text>
                <TouchableOpacity style={{ marginRight: 20 }} onPress={inCreaseMonth}>
                    <Icon name="chevron-right" size={16} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ width: '40%', alignItems: 'center' }}>
                <TouchableOpacity>
                <Text>{hour}:{minites}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#20b2aa',
        marginBottom: 10
    },
    headerDay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%'
    },
    textDay: {
        marginHorizontal: 20
    }
})