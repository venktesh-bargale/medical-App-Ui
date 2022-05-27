import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import 'react-native-reanimated';
import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import Iconins from 'react-native-vector-icons/Fontisto';
const { height, width } = Dimensions.get('window')

const Schedule = ({ navigation }) => {
  const [BackColor, setBackColor] = useState('#DCEDF9')
  var data = [
    { id: '1', date: 21, day: 'Mon' },
    { id: '2', date: 21, day: 'Tue' },
    { id: '3', date: 10, day: 'Wed' },
    { id: '4', date: 10, day: 'Thu' },
    { id: '5', date: 10, day: 'Fri' },
  ]
  var data1 = [
    { id: 1, name: 'Dr. Zim Akhter', time: '12:30 PM', type: 'Cardiologist', img: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?size=626&ext=jpg&ga=GA1.2.1292437403.1653372344', backColor: '#1C6BA4' },
    { id: 2, name: 'Dr. Zim Akhter', time: '12:30 PM', type: 'Cardiologist', img: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg&ga=GA1.2.1292437403.1653372344', backColor: '#F1E6EAF7' },
  ]
  var date = new Date().getDate()
  var line = "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - "
  const ChangeColor = () => {
    setBackColor = "#1C6BA4"
  }
  return (
    <ScrollView contentContainerStyle={{backgroundColor:'#FFFFFF',minHeight:height}}>
      <View style={styles.MainView}>
        <Text style={styles.ScheduleText}>Schedule</Text>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item, index }) =>
            <View>
              <TouchableOpacity style={[styles.ScheduleDateView, { backgroundColor: BackColor }]}
                onPress={() => {
                  navigation.navigate('DoctorsScreen')

                }}

              >
                <Text style={styles.ScheduleDate}>{item.date}</Text>
                <Text style={styles.ScheduleDay}>{item.day}</Text>
              </TouchableOpacity>
            </View>
          }
        />
        <View>
          <Text style={styles.Time}>12:00 PM {line} </Text>
          <FlatList
            data={data1}
            renderItem={({ item, index }) =>
              <View>
                <TouchableOpacity style={[styles.AppointmentView, { backgroundColor: item.backColor }]}>
                  <View style={[styles.DayView, { backgroundColor: item.backColor, }]}>
                    <Image source={{uri:item.img}} style={styles.doctorImage} />

                  </View>
                  <View style={styles.appointmentDetailsView}>
                    <Text style={styles.appointmentTime}>{item.time}</Text>
                    <Text style={styles.appointmentDrName}>{item.name}</Text>
                    <Text style={styles.appoitmentType}>{item.type}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            } />
        </View>
      </View>
    </ScrollView>
  )
}

export default Schedule

const styles = ScaledSheet.create({
  MainView: {
    width: '95%',
    alignSelf: 'center',
  },
  ScheduleText: {
    fontSize: '27@s',
    fontWeight: '700',
    color: '#0E1012',
    marginBottom: '10@s',
    marginTop: '10@s'

  },
  ScheduleDateView: {
    height: '90@s',
    width: '70@s',
    backgroundColor: '#1C6BA4',
    borderRadius: '20@s',
    marginRight: '10@s',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ScheduleDay: {
    fontWeight: '600',
    fontSize: '14@s',
    color: '#000000'
  },
  ScheduleDate: {
    fontWeight: '800',
    fontSize: '20@s',
    color: '#000000',
    marginBottom: '5@s'
  },
  Time: {
    fontSize: '14@s',
    width: '100%',
    height: '20@s',
    color: '#7D96B5',
    marginTop: '15@s'
  },
  AppointmentView: {
    height: '130@s',
    width: width * 0.90,
    marginTop: '20@s',
    marginLeft: '10@s',
    borderRadius: '20@s',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  DayView: {
    marginLeft: '20@s',
    width: '20%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorImage: {
    height:'60@s',
    width:'60@s',
    borderRadius:'20@s'
  },
  appointmentDetailsView: {
    marginLeft: '5%',

  },
  appointmentTime: {
    color: '#000000',
    fontSize: '14@s',
    fontWeight: '400'
  },
  appointmentDrName: {
    color: '#000000',
    fontSize: '19@s',
    fontWeight: '700',
    marginTop: '7@s',
    marginBottom: '7@s'
  },
  appoitmentType: {
    color: '#000000',
    fontSize: '15@s',
    fontWeight: '400',
    opacity: 0.5
  },
  AppointmentText: {
    fontSize: '17@s',
    fontWeight: '700',
    color: '#000000',
    marginTop: '15@s',
    marginLeft: '10@s'
  }
})