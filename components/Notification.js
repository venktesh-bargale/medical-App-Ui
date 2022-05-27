import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import 'react-native-reanimated';
import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import Iconins from 'react-native-vector-icons/Fontisto';
const { height, width } = Dimensions.get('window')

const Notification = () => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor:'#FFFFFF'}}>
      <View style={styles.mainView}>
        <Text style={styles.notificationText}>Notification</Text>
        <TouchableOpacity style={styles.LattestReportView}>
          <View style={styles.LattestReportIconView}>
            <View style={[styles.LattestReportIconUnderView,{backgroundColor:'DCEDF9'}]}>
              <Image source={require('../assets/Schedules.png')} style={styles.GeneralHealthViewIcon} />
            </View>
          </View>
          <View style={styles.LattestReportTextView}>
            <Text style={styles.GeneralHealthText}>3 Schedules!</Text>
            <Text style={styles.GeneralHealthFilesText}>Check your schedule Today</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LattestReportView}>
          <View style={styles.LattestReportIconView}>
            <View style={[styles.LattestReportIconUnderView,{backgroundColor:'#F7385926'}]}>
              <Image source={require('../assets/Message.png')} style={styles.GeneralHealthViewIcon} />
            </View>
          </View>
          <View style={styles.LattestReportTextView}>
            <Text style={styles.GeneralHealthText}>14 Messages</Text>
            <Text style={styles.GeneralHealthFilesText}>Check your schedule Today</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LattestReportView}>
          <View style={styles.LattestReportIconView}>
            <View style={[styles.LattestReportIconUnderView,{backgroundColor:'#FAF0DB'}]}>
              <Image source={require('../assets/Medicine.png')} style={styles.GeneralHealthViewIcon} />
            </View>
          </View>
          <View style={styles.LattestReportTextView}>
            <Text style={styles.GeneralHealthText}>Medicine</Text>
            <Text style={styles.GeneralHealthFilesText}>Check your schedule Today</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LattestReportView}>
          <View style={styles.LattestReportIconView}>
            <View style={[styles.LattestReportIconUnderView,{backgroundColor:'#D6F6FF'}]}>
              <Image source={require('../assets/vaccines.png')} style={styles.GeneralHealthViewIcon} />
            </View>
          </View>
          <View style={styles.LattestReportTextView}>
            <Text style={styles.GeneralHealthText}>Vaccine Update</Text>
            <Text style={styles.GeneralHealthFilesText}>Check your schedule Today</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LattestReportView}>
          <View style={styles.LattestReportIconView}>
            <View style={[styles.LattestReportIconUnderView,{backgroundColor:'#F2E3E9'}]}>
              <Image source={require('../assets/update.png')} style={styles.GeneralHealthViewIcon} />
            </View>
          </View>
          <View style={styles.LattestReportTextView}>
            <Text style={styles.GeneralHealthText}>App Update</Text>
            <Text style={styles.GeneralHealthFilesText}>Check your schedule Today</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Notification

const styles = ScaledSheet.create({
  mainView: {
    width: '95%',
    alignSelf: 'center',
    
  },
  notificationText: {
    fontSize: '27@s',
    fontWeight: '700',
    color: '#000000',
    margin: '10@s'
  },
  LattestReportView: {
    width: '100%',
    height: height * 0.15,
    borderRadius: '28@s',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    marginBottom: '20@s',
    borderWidth: '1@s',
    borderColor: '#D7DDEA',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
    flexDirection: 'row'
  },
  LattestReportIconView: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  LattestReportIconUnderView: {
    height:'60%',
    width:'60%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'20@s',
    backgroundColor:'#DCEDF9',
  },
  GeneralHealthViewIcon: {
    resizeMode: 'contain',
    width: '30@s',
    height: '40@s',
  },
  GeneralHealthText: {
    fontSize: '18@s',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '10@s'
  },
  GeneralHealthFilesText: {
    fontSize: '14@s',
    fontWeight: '400',
    color: '#4A545E',
    marginBottom: '10@s'
  }
})