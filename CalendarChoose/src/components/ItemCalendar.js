import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Header } from './Header';
import { useDispatch, useSelector } from 'react-redux'
import { createObjDateTime } from '../service/model'
import { getDayInDate, daysInMonth } from '../shared/custom'
import { addDateTime } from '../store/reducer'

const RenderListDay = ({ type, start, max }) => {
  const date = useSelector(state => state)
  const dispatch = useDispatch()
  const display = date.dateTimeDisplay
  const now = date.dateTimeNow
  const choose = date.dateTimeChoose
  const list = []
  for (let i = start; i <= max; i = i + 7) {
    if (i <= 0) {
      list.push(
        <View style={{
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>-</Text>
        </View>
      )
    } else {
      list.push(
        <TouchableOpacity
          style={[styles.bottonCalendar, {
            borderWidth: display.years == now.years && display.months == now.months && i == now.dates ? 1 : 0,
            backgroundColor: display.years == choose.years && display.months == choose.months && i == choose.dates ? '#20b2aa' : null,
          }]}
          onPress={() => {
            dispatch(addDateTime({
              name: 'dateTimeChoose',
              data: createObjDateTime(display.years, display.months, i, display.hours, display.minitues)
            }))
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

export default function ItemCalendar() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const d = new Date()
  const display = state?.dateTimeDisplay
  // useEffect(() => {
  //   dispatch(addDateTime({
  //     name: 'dateTimeNow',
  //     data: createObjDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes())
  //   }))
  //   dispatch(addDateTime({
  //     name: 'dateTimeChoose',
  //     data: createObjDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes())
  //   }))
  //   dispatch(addDateTime({
  //     name: 'dateTimeDisplay',
  //     data: createObjDateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes())
  //   }))
  // }, [])
  const [startSu, setStartSu] = useState(0)
  const startDay = getDayInDate(1, display?.months, display?.years)
  const dayInMonth = daysInMonth(display?.months, display?.years)
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
  return (
    <View style={styles.contrainer}>
      <Header/>
      <View style={styles.title}>
        <RenderListDay type='Su' start={startSu} max={dayInMonth} />
        <RenderListDay type='Mo' start={startSu + 1} max={dayInMonth} />
        <RenderListDay type='Tu' start={startSu + 2} max={dayInMonth} />
        <RenderListDay type='We' start={startSu + 3} max={dayInMonth} />
        <RenderListDay type='Th' start={startSu + 4} max={dayInMonth} />
        <RenderListDay type='Fr' start={startSu + 5} max={dayInMonth} />
        <RenderListDay type='Sa' start={startSu + 6} max={dayInMonth} />
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
    borderColor: '#20b2aa',
    backgroundColor: 'white',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  textTitle: {
  },
  bottonCalendar: {
    borderRadius: 25,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})