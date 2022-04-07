import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
  } from 'react-native'
  import React, { useState } from 'react'
  
  const RenderListChoose = ({ start, end, onPress = () => {}, width = 60 }) => {
    let listChoose = []
    for (let i = start; i <= end; i++) {
      listChoose.push(
        <TouchableOpacity
          style={{
            left: 10,
            bottom: 16,
          }}
          onPress={() => onPress(i)}
        >
          <Text style={{}}>{i}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <ScrollView style={[styles.scrollChoose, { width }]}>
        {listChoose}
      </ScrollView>
    )
  }
  
  export const RenderItemChoose = ({
    value,
    nameItem,
    start = 0,
    end = 100,
    setValue = () => {},
    width = 66,
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
              <Image
                source={require('../../../assets/search/CaretDown.png')}
                style={{ height: 16, width: 16 }}
              />
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
          />
        ) : null}
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
      paddingTop: 6,
    },
  })
  