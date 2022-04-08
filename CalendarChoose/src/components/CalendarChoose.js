import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemCalendar from './ItemCalendar';
import RenderChooseYearMonth from './RenderChooseYearMonth';

export default function CalendarChoose() {
    const [dateTime, setDateTime] = React.useState();
    const [showCalender, setShowCalendar] = React.useState(false);
    // const changValue = (minutes, hour, date, month, year) => {
    //     setDateTime(`${hour}:${minutes}  ${date}/${month}/${year}`)
    // }

    return (
        <View style={{
            zIndex: 9999
        }}>
            <TextInput
                style={styles.input}
                onChangeText={setDateTime}
                value={dateTime}
                onFocus={() => {
                    setShowCalendar(true)
                }}
                onBlur={() => {
                    setShowCalendar(false)
                }}
            />
            {/* {showCalender ?  */}
            <ItemCalendar />
            <RenderChooseYearMonth/>
            {/* : null} */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})