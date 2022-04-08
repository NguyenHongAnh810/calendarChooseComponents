// import { View, StyleSheet } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { RenderItemChoose } from './RenderChoose'

// function daysInMonth(month, year) {
//   return new Date(year, month, 0).getDate()
// }

// export default function DateTimeChoose({ changeValue }) {
//   const d = new Date()
//   const [year, setYear] = useState(d.getFullYear())
//   const [month, setMonth] = useState(d.getMonth() + 1)
//   const [day, setDay] = useState(d.getDate())
//   const days = daysInMonth(month, year)

//   useEffect(() => {
//     if (day > days) {
//       setDay(days)
//     }
//     changeValue(year, month, day)
//   }, [year, month, day])
//   return (
//     <View style={styles.container}>
//       <RenderItemChoose
//         value={year}
//         nameItem="年"
//         start={1900}
//         end={2100}
//         setValue={setYear}
//         width={70}
//       />
//       <RenderItemChoose
//         value={month}
//         nameItem="月"
//         start={1}
//         end={12}
//         setValue={setMonth}
//         width={60}
//       />
//       <RenderItemChoose
//         value={day}
//         nameItem="月"
//         start={1}
//         end={days}
//         setValue={setDay}
//         width={60}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     // marginRight: 100,
//     // marginLeft: 20,
//   },
// })
