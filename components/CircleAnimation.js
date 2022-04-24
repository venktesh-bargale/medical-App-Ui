import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import 'react-native-reanimated';
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import Iconins from 'react-native-vector-icons/Fontisto';
const { height, width } = Dimensions.get('window')
export default function CircleAnimation() {
  var data = [
    { id: '1', img: require('../assets/DoctorIcon.png'), backColor: '#DCEDF9' },
    { id: '2', img: require('../assets/MedicinIcon.png'), backColor: '#FAF0DB' },
    { id: '3', img: require('../assets/AppointmentIcon.png'), backColor: '#D6F6FF' },
    { id: '4', img: require('../assets/Virus.png'), backColor: '#F2E3E9' },
  ]
  var data1 = [
    { id: 1, title: 'Get the Best Medical Service ', text: 'Lorem Ipsum is simply dummy text of the printing ', img: require('../assets/doctorImage.png'), backColor: '#DCEDF9' },
    { id: 2, title: 'Get the Best Medical Service ', text: 'Lorem Ipsum is simply dummy text of the printing ', img: require('../assets/doctorImage.png'), backColor: '#FAF0DB' },
    { id: 3, title: 'Get the Best Medical Service ', text: 'Lorem Ipsum is simply dummy text of the printing ', img: require('../assets/doctorImage.png'), backColor: '#D6F6FF' },
  ]
  var Appointments=[
    {id:1,date:12,day:'mon',time:'09:30 AM',DrName:'Dr. Mim Akhter',type:'Depression',backColor:'#155A96',ViewColor:'#1C6A96',shadowColor:'white'},
    {id:2,date:12,day:'mon',time:'09:30 AM',DrName:'Dr. Mim Akhter',type:'Depression',backColor:'#CC901A',ViewColor:'#E09F1F',shadowColor:'red'},
    {id:3,date:12,day:'mon',time:'09:30 AM',DrName:'Dr. Mim Akhter',type:'Depression',backColor:'#028CB1',ViewColor:'#009DC7',shadowColor:'orange'},
    {id:4,date:12,day:'mon',time:'09:30 AM',DrName:'Dr. Mim Akhter',type:'Depression',backColor:'#AE5679',ViewColor:'#9D4C6C',shadowColor:'blue'},
  ]
  return (
    <ScrollView>
      <View style={styles.TopView}>
        <View style={styles.topFirstView}>
          <Text>👋 Hello!</Text>
          <Text style={styles.DoctorName}>Vyanktesh Bargale</Text>
        </View>
        <View style={styles.topSecondView}>
          <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?s=612x612' }} style={styles.Topimage} />
          <View style={styles.ActiveTag}></View>
        </View>
      </View>
      <View style={styles.searchView}>
        <View style={styles.searchUnder}>
          <Iconins
            name="search"
            style={styles.icon}
          />
          <TextInput placeholder='search medical...' style={styles.searchInput} />
        </View>
        <Image source={require('../assets/filter.png')} style={styles.filter} />
      </View>
      <View style={styles.MainServicesView}>
        <Text style={styles.ServicesText}>Services</Text>
        { }
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item, index }) =>
            <View>
              <TouchableOpacity style={[styles.ServicesView, { backgroundColor: item.backColor }]}>
                <Image source={item.img} style={styles.servicesIcons} />
              </TouchableOpacity>
            </View>
          } />

        <FlatList
          data={data1}
          horizontal={true}
          renderItem={({ item, index }) =>
            <View>
              <TouchableOpacity style={[styles.advertiseView, { backgroundColor: item.backColor }]}>
                <View style={styles.textView}>
                  <Text style={styles.AdvertiseTitle}>{item.title}</Text>
                  <Text style={styles.AdvertiseText}>{item.text}</Text>
                </View>
                <View style={styles.imageView}>
                  <Image source={item.img} style={styles.DoctorImage} />
                </View>
              </TouchableOpacity>
            </View>
          } />
      </View>
      <View>
      <Text style={styles.AppointmentText}>Upcoming Appointments</Text>
      <FlatList
          data={Appointments}
          horizontal={true}
          renderItem={({ item, index }) =>
            <View>
              <TouchableOpacity style={[styles.AppointmentView, { backgroundColor: item.ViewColor }]}>
                <View style={[styles.DayView,{backgroundColor:item.backColor,}]}>
                  <Text style={styles.appointmentDate}>{item.date}</Text>
                  <Text style={styles.appointmentDay}>{item.day}</Text>
                </View>
                <View style={styles.appointmentDetailsView}>
                <Text style={styles.appointmentTime}>{item.time}</Text>
                <Text style={styles.appointmentDrName}>{item.DrName}</Text>
                <Text style={styles.appoitmentType}>{item.type}</Text>
                </View>
              </TouchableOpacity>
            </View>
          } />
      </View>
    </ScrollView>
  )
}

const styles = ScaledSheet.create({
  TopView: {
    flex: 1,
    width: '90%',
    marginTop: '10@s',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  topFirstView: {
    width: '80%',

  },
  topSecondView: {
    alignSelf: 'center'
  },
  Topimage: {
    height: '48@s',
    width: '48@s',
    borderRadius: '18@s',
  },
  DoctorName: {
    color: '#253141',
    fontSize: '27@s',
    fontWeight: '700',
    marginTop: '10@s'
  },
  ActiveTag: {
    backgroundColor: '#1C6BA4',
    height: '18@s',
    width: '18@s',
    borderRadius: '100@s',
    position: 'absolute',
    right: '-5@s',
    borderColor: '#FFFFFF',
    borderWidth: '2@s'
  },
  searchView: {
    backgroundColor: '#EEF6FC',
    width: '90%',
    height: '56@s',
    marginTop: '25@s',
    alignSelf: 'center',
    borderRadius: '18@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '10@s'

  },
  searchUnder: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: '20@s',
    marginLeft: '5@s'
  },
  searchInput: {
    marginLeft: '10@s'
  },
  filter: {
    height: '20@s',
    width: '20@s',
    marginRight: '20@s'
  },
  MainServicesView: {
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center'
  },
  ServicesText: {
    fontSize: '17@s',
    margin: '10@s',
    fontWeight: '700',
    alignSelf: 'flex-start',
    color:'#000'
  },
  ServicesView: {
    height: '70@s',
    width: '70@s',
    backgroundColor: 'red',
    marginRight: '10@s',
    borderRadius: '20@s',
    alignItems: 'center',
    justifyContent: 'center'

  },
  servicesIcons: {
    height: '40@s',
    width: '40@s',
    resizeMode: 'contain'
  },
  Phrasetext: {
    fontSize: '18@s',
    fontWeight: '400',
    margin: '2@s',
    width: '85@s',
    textAlign: 'center'

  },
  advertiseView: {
    height: '170@s',
    width: width * 0.90,
    marginTop: '20@s',
    marginLeft: '10@s',
    borderRadius: '20@s',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imageView:{
    height:'170@s',
    justifyContent:'flex-end'
  },
  DoctorImage: {
    height: '150@s',
    width: '120@s',
    resizeMode: 'contain',
  },
  textView:{
    width:width*0.50,
    height:'170@s',
    justifyContent:'center'
  },
  AdvertiseTitle:{
    fontSize:'23@s',
    fontWeight:'700',
    color:'#0E1012',
    marginBottom:'10@s'
  },
  AdvertiseText:{
    fontWeight:'400',
    fontSize:'13@s',
  },
  AppointmentView: {
    height: '130@s',
    width: width * 0.80,
    marginTop: '20@s',
    marginLeft: '10@s',
    borderRadius: '20@s',
    justifyContent: 'flex-start',
    alignItems:'center',
    flexDirection: 'row',
  },
  DayView:{
    marginLeft:'20@s',
    width:'25%',
    height:'80%',
    backgroundColor:'#1C6A96',
    borderRadius:'25@s',
    alignItems:'center',
    justifyContent:'center',
    shadowColor: 'white',
   
    shadowOpacity: 0.9,
    elevation: 5,
  },
  appointmentDate:{
    color:'#FFFFFF',
    fontSize:'22@s',
    fontWeight:'800'
  },
  appointmentDay:{
    color:'#FFFFFF',
    fontSize:'16@s',
    fontWeight:'600'
  },
  appointmentDetailsView:{
    marginLeft:'10%',

  },
  appointmentTime:{
    color:'#FFFFFF',
    fontSize:'14@s',
    fontWeight:'400'
  },
  appointmentDrName:{
    color:'#FFFFFF',
    fontSize:'19@s',
    fontWeight:'700',
    marginTop:'7@s',
    marginBottom:'7@s'
  },
  appoitmentType:{
    color:'#FFFFFF',
    fontSize:'15@s',
    fontWeight:'400',
    opacity:0.5
  },
  AppointmentText:{
    fontSize:'17@s',
    fontWeight:'700',
    color:'#000000',
    marginTop:'15@s',
    marginLeft:'10@s'
  }
})