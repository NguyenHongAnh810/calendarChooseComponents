import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native'
import React from 'react'

export const RenderListChoose = ({ start, end, onPress = () => { }, width = 60, reverse }) => {
    let listChoose = []
    if (reverse) {
        for (let i = end; i >= start; i--) {
            listChoose.push(
                <TouchableOpacity
                    style={{
                        left: 10,
                    }}
                    onPress={() => onPress(i)}
                >
                    <Text style={{}}>{i}</Text>
                </TouchableOpacity>
            )
        }
    } else {
        for (let i = start; i <= end; i++) {
            listChoose.push(
                <TouchableOpacity
                    style={{
                        left: 10,
                    }}
                    onPress={() => onPress(i)}
                >
                    <Text style={{}}>{i}</Text>
                </TouchableOpacity>
            )
        }
    }
    return (
        <ScrollView style={[styles.scrollChoose, { width }]}>
            {listChoose}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollChoose: {
      maxHeight: 150,
      borderWidth: 1,
      borderColor: '#DCDCDC',
      borderTopWidth: 0,
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
      position: 'absolute',
      top: 24,
      zIndex: 100,
      backgroundColor: '#fff',
    },
  })
  