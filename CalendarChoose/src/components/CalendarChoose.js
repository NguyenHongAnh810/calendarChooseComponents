import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'
import React, { useState } from 'react'
import ItemCalendar from './ItemCalendar';

export default function CalendarChoose() {
    const [dateTime, setDateTime] = React.useState();
    const [showCalender, setShowCalendar] = React.useState(false);
    const changValue = (minutes, hour, date, month, year) =>{
        setDateTime(`${hour}:${minutes}  ${date}/${month}/${year}`)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setDateTime}
                value={dateTime}
                onFocus = {()=>{
                    setShowCalendar(true)
                }}
                onBlur = {()=>{
                    setShowCalendar(false)
                }} 
            />
            {showCalender? <ItemCalendar getValue = {changValue}/>: null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})