import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux'
import { createObjDateTime } from '../service/model'
import { getDayInDate, daysInMonth } from '../shared/custom'
import { addDateTime } from '../store/reducer'
import RenderChooseYearMonth from './RenderChooseYearMonth';

export const Header = () => {
    const date = useSelector(state => state.dateTimeDisplay)
    const dispatch = useDispatch()
    const month = date.months
    const deCreaseMonth = () => {
        if (month > 1) {
            dispatch(addDateTime({
                name: 'dateTimeDisplay',
                data: createObjDateTime(date.years, date.months - 1, date.dates, date.hours, date.minitues)
            }))
        } else {
            dispatch(addDateTime({
                name: 'dateTimeDisplay',
                data: createObjDateTime(date.years - 1, 12, date.dates, date.hours, date.minitues)
            }))
        }
    }
    const inCreaseMonth = () => {
        if (month < 12) {
            dispatch(addDateTime({
                name: 'dateTimeDisplay',
                data: createObjDateTime(date.years, date.months + 1, date.dates, date.hours, date.minitues)
            }))
        } else {
            dispatch(addDateTime({
                name: 'dateTimeDisplay',
                data: createObjDateTime(date.years + 1, 1, date.dates, date.hours, date.minitues)
            }))
        }
    }
    return (
        <View style={styles.header}>
            <View style={styles.headerDay}>
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={deCreaseMonth}>
                    <Icon name="chevron-left" size={16} color="black" />
                </TouchableOpacity >
                <TouchableOpacity>
                    <Text>{date.months}, {date.years}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 20 }} onPress={inCreaseMonth}>
                    <Icon name="chevron-right" size={16} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ width: '40%', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Text>{date.hours}:{date.minitues}</Text>
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