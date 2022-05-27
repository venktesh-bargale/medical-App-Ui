import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import 'react-native-reanimated';
import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import Iconins from 'react-native-vector-icons/Fontisto';
const { height, width } = Dimensions.get('window')

const Report = () => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor:'#FFFFFF'}}>
      <View style={styles.mainView}>
        <Text style={styles.reportText}>Report</Text>
        <View style={styles.heartRateView}>
          <View style={styles.heartRateView1}>
            <Text style={styles.heartRateText}>Heart Rate</Text>
            <View style={styles.bpmView}>
              <Text style={styles.bpmNO}>96</Text>
              <Text style={styles.bpmText}>bps</Text>
            </View>
          </View>
          <View style={styles.heartRateView2}>
            <Image source={require('../assets/bpm.png')} style={styles.bpmImage} />
          </View>
        </View>
        <View style={styles.infoView}>
          <View style={styles.bloodGroupView}>
            <Image source={require('../assets/Blood.png')} style={styles.BloodImage} />
            <Text style={styles.innerinfoText}>Blood Group</Text>
            <Text style={styles.weightBloodText}>A+</Text>

          </View>
          <View style={styles.weightView}>
            <Image source={require('../assets/weight.png')} style={styles.WeightImage} />
            <Text style={styles.innerinfoText}>Weight</Text>
            <Text style={styles.weightBloodText}>80 <Text style={[styles.weightBloodText, { fontSize: 20 }]}>kg</Text></Text>
          </View>
        </View>
        <View>
          <Text style={styles.LattestReportText}>Lattest Report</Text>
          <TouchableOpacity style={styles.LattestReportView}>
            <View style={styles.LattestReportIconView}>
              <View style={styles.LattestReportIconUnderView}>
                <Image source={require('../assets/GreenFileIcon.png')} style={styles.GeneralHealthViewIcon} />
              </View>
            </View>
            <View style={styles.LattestReportTextView}>
              <Text style={styles.GeneralHealthText}>General Health</Text>
              <Text style={styles.GeneralHealthFilesText}>8 Files</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LattestReportView}>
            <View style={styles.LattestReportIconView}>
              <View style={styles.LattestReportIconUnderView}>
                <Image source={require('../assets/BlueFileIcon.png')} style={styles.GeneralHealthViewIcon} />
              </View>
            </View>
            <View style={styles.LattestReportTextView}>
              <Text style={styles.GeneralHealthText}>General Health</Text>
              <Text style={styles.GeneralHealthFilesText}>8 Files</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Report

const styles = ScaledSheet.create({
  mainView: {
    width: '95%',
    alignSelf: 'center',
    
  },
  reportText: {
    fontSize: '27@s',
    fontWeight: '700',
    color: '#000000',
    margin: '10@s'
  },
  heartRateView: {
    width: '100%',
    height: height * 0.25,
    backgroundColor: '#DCEDF9',
    borderRadius: '24@s',
    flexDirection: 'row'
  },
  heartRateView1: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartRateView2: {

    justifyContent: 'center',
    width: '60%'

  },
  heartRateText: {
    fontSize: '16@s',
    fontWeight: '400',
    color: '#000000',
    marginBottom: '15@s',
    right: '10@s'
  },
  bpmView: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  bpmNO: {
    fontSize: '50@s',
    fontWeight: '400',
    color: '#000000'
  },
  bpmText: {
    fontSize: '24@s',
    fontWeight: '700',
    marginLeft: '5@s',
    marginBottom: '5@s',
    color: '#000000'
  },
  bpmImage: {
    resizeMode: 'contain',
    width: '90%'
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20@s'
  },
  bloodGroupView: {
    width: '45%',
    height: height * 0.20,
    backgroundColor: '#F5E1E9',
    borderRadius: '24@s'
  },
  weightView: {
    width: '45%',
    height: height * 0.20,
    backgroundColor: '#FAF0DB',
    borderRadius: '24@s'
  },
  BloodImage: {
    resizeMode: 'contain',
    height: '30@s',
    width: '30@s',
    marginTop: '25@s',
    marginLeft: '20@s',
  },
  WeightImage: {
    resizeMode: 'contain',
    height: '40@s',
    width: '40@s',
    marginTop: '20@s',
    marginLeft: '20@s',
  },
  innerinfoText: {
    fontWeight: '400',
    fontSize: '14@s',
    marginLeft: '20@s',
    marginTop: '10@s',
    color: '#000000'
  },
  weightBloodText: {
    fontWeight: '700',
    fontSize: '28@s',
    color: '#000000',
    marginLeft: '20@s',
    marginTop: '10@s'
  },
  LattestReportText: {
    fontSize: '17@s',
    fontWeight: '700',
    color: '#000000',
    marginTop: '10@s',
    marginLeft: '10@s'
  },
  LattestReportView: {
    width: '100%',
    height: height * 0.15,
    borderRadius: '28@s',
    backgroundColor:'#FFFFFF',
    shadowColor: '#000000',
    marginBottom:'20@s',
    borderWidth:'1@s',
    borderColor:'#D7DDEA',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
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
  LattestReportIconUnderView:{
    height:'60%',
    width:'60%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'20@s',
    backgroundColor:'#DCEDF9',
  },
  GeneralHealthViewIcon:{
    resizeMode:'contain',
    width:'30@s',
    height:'40@s',
  },
  GeneralHealthText:{
    fontSize:'18@s',
    fontWeight:'700',
    color:'#000000',
    marginBottom:'10@s'
  },
  GeneralHealthFilesText:{
    fontSize:'14@s',
    fontWeight:'400',
    color:'#4A545E',
    marginBottom:'10@s'
  }

})