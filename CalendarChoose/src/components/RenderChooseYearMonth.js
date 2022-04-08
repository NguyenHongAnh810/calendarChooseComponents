import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { RenderListChoose } from './RenderListChoose'
import { daysInMonth } from '../shared/custom'

export const RenderItemDate = ({
    value,
    nameItem,
    start = 0,
    end = 100,
    setValue = () => { },
    width = 66,
    reverse = false
}) => {
    const [showScroll, setShowScroll] = useState(false)
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 15,
                }}
            >
                <View style={[styles.itemView, { width }]}>
                    <TouchableOpacity
                        style={styles.bottonView}
                        onPress={() => {
                            setShowScroll(!showScroll)
                        }}
                    >
                        <Text style={styles.textView}>{value}</Text>
                        {/* <Image
                            source={require('../../../assets/search/CaretDown.png')}
                            style={{ height: 16, width: 16 }}
                        /> */}
                    </TouchableOpacity>
                </View>
                <Text style={{ left: 4, color: '#666666', marginVertical: 4 }}>
                    {nameItem}
                </Text>
            </View>
            {showScroll ? (
                <RenderListChoose
                    start={start}
                    end={end}
                    width={width}
                    onPress={val => {
                        setValue(val)
                        setShowScroll(!showScroll)
                    }}
                    reverse={reverse}
                />
            ) : null}
        </View>
    )
}
export default function RenderChooseYearMonth({ changeValue = ()=>{} }) {
    const d = new Date()
    const [year, setYear] = useState(d.getFullYear())
    const [month, setMonth] = useState(d.getMonth() + 1)
    const [day, setDay] = useState(d.getDate())
    const days = daysInMonth(month, year)

    useEffect(() => {
        if (day > days) {
            setDay(days)
        }
        changeValue(year, month, day)
    }, [year, month, day])
    return (
        <View style={styles.container}>
            <RenderItemDate
                value={year}
                nameItem="年"
                start={1900}
                end={2100}
                setValue={setYear}
                width={70}
                reverse
            />
            <RenderItemDate
                value={month}
                nameItem="月"
                start={1}
                end={12}
                setValue={setMonth}
                width={60}
            />
            <RenderItemDate
                value={day}
                nameItem="月"
                start={1}
                end={days}
                setValue={setDay}
                width={60}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    itemView: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#DCDCDC',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottonView: {
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    textView: {
        fontSize: 14,
        fontFamily: 'Noto Sans',
        color: '#333333',
        left: 6,
    },
})
