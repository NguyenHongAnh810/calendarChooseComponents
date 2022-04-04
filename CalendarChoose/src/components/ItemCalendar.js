import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Header } from './Header';

function getDayInDate(day, month, year) {
  return new Date(year, month - 1, day).getDay()
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}


const RenderListDay = ({ type = 'Su', start = 1, max = 31, date = 1, setDate = () => { } }) => {
  const list = []
  for (let i = start; i <= max; i = i + 7) {
    if (i <= 0) {
      list.push(
        <Text>-</Text>
      )
    } else {
      list.push(
        <TouchableOpacity
          style={{ borderWidth: i == date ? 1 : 0 }}
          onPress={() => {
            setDate(i)
          }}>
          <Text>{i}</Text>
        </TouchableOpacity>
      )
    }
  }
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.textTitle}>{type}</Text>
      {list}
    </View>
  )
}

export default function ItemCalendar({getValue = ()=>{}}) {
  const d = new Date()
  const [month, setMonth] = useState(d.getMonth() + 1)
  const [year, setYear] = useState(d.getFullYear())
  const [hour, sethour] = useState(d.getHours())
  const [minutes, setMinutes] = useState(d.getMinutes())
  const [date, setDate] = useState(d.getDate())
  const [startSu, setStartSu] = useState(0)
  const startDay = getDayInDate(1, month, d.getFullYear())
  const dayInMonth = daysInMonth(month, d.getFullYear())
  useEffect(() => {
    switch (startDay) {
      case 0:
        setStartSu(1)
        break;
      case 1:
        setStartSu(0)
        break;
      case 2:
        setStartSu(-1)
        break;
      case 3:
        setStartSu(-2)
        break;
      case 4:
        setStartSu(-3)
        break;
      case 5:
        setStartSu(-4)
        break;
      case 6:
        setStartSu(-5)
        break;
      default:
        break;
    }
  }, [startDay])
  useEffect(()=>{
    getValue(minutes, hour, date, month, year)
  }, [minutes, hour, date, month, year])
  return (
    <View style={styles.contrainer}>
      <Header month={month} setMonth={setMonth} year={year} setYear={setYear} hour={hour} minites={minutes} />
      <View style={styles.title}>
        <RenderListDay type='Su' start={startSu} max={dayInMonth} />
        <RenderListDay type='Mo' start={startSu + 1} max={dayInMonth} date = {date} setDate={setDate}/>
        <RenderListDay type='Tu' start={startSu + 2} max={dayInMonth} date = {date} setDate={setDate}/>
        <RenderListDay type='We' start={startSu + 3} max={dayInMonth} date = {date} setDate={setDate}/>
        <RenderListDay type='Th' start={startSu + 4} max={dayInMonth} date = {date} setDate={setDate}/>
        <RenderListDay type='Fr' start={startSu + 5} max={dayInMonth} date = {date} setDate={setDate}/>
        <RenderListDay type='Sa' start={startSu + 6} max={dayInMonth} date = {date} setDate={setDate}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contrainer: {
    marginTop: 60,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    position: 'absolute'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10
  },
  textTitle: {
  }
})