/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';

const windowHeight = Dimensions.get('window').height;

const TripDetails = props => {
  return (
    <SafeAreaView>
      <View style={{}}>
        <ImageBackground
          source={require('../assets/tripImage.jpeg')}
          resizeMode="cover"
          imageStyle={{borderRadius: 20, margin: 20}}
          style={styles.image}>
          <View style={{justifyContent: 'space-between', flex: 1}}>
            <View style={styles.headerView}>
              <Icon
                name="leftcircle"
                size={40}
                color="#D3D3D3"
                style={{}}
                onPress={() => props.navigation.pop()}
              />
              <Text style={styles.textHeader}>Trip Detail</Text>
              <View style={styles.iconView}>
                <Icons name="bus" size={25} color="grey" />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/tripImage.jpeg')}
                style={styles.selectedImage}
              />
              <Image
                source={require('../assets/images1.jpeg')}
                style={styles.imageButton}
              />
              <Image
                source={require('../assets/image3.jpeg')}
                style={styles.imageButton}
              />
              <Image
                source={require('../assets/image4.jpeg')}
                style={styles.imageButton}
              />
            </View>
          </View>
        </ImageBackground>
        <Text style={styles.headerText}>Turkey</Text>
        <Text style={styles.valuesText}>$50.00</Text>
        <Text style={styles.contentText}>Cappadocia</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={styles.viewIconsD}>
            <Icon name="star" size={25} color="#FF6700" />
            <Text style={styles.viewIconsText}>5.0</Text>
          </View>
          <View style={styles.viewIconsD}>
            <Icons name="timer" size={25} color="#FF6700" />
            <Text style={styles.viewIconsText}>30 min</Text>
          </View>
          <View style={styles.viewIconsD}>
            <Icons name="location-sharp" size={25} color="#FF6700" />
            <Text style={styles.viewIconsText}>30 km</Text>
          </View>
        </View>
        <View style={styles.textView}>
          <Text style={{color: 'grey'}}>
            How Not to Travel The World is about following your dreams, no
            matter how many curveballs life throws at you. It is about learning
            to get out of your comfort zone, finding the humour in messed up
            situations, and falling in love with life on the road.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
          <Icon name="rightcircle" size={18} color="white" style={{}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textHeader: {fontSize: 20, fontWeight: 'bold', color: 'white'},
  iconView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    height: windowHeight / 2 - 20,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    alignItems: 'center',
  },
  textView: {marginTop: 20, marginHorizontal: 20},
  headerText: {
    marginTop: 50,
    color: '#FF6700',
    marginHorizontal: 30,
    fontWeight: 'bold',
  },
  contentText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 20,
  },
  valuesText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 20,
    alignSelf: 'flex-end',
  },
  viewIconsD: {flexDirection: 'row', alignItems: 'center', marginLeft: 20},
  viewIconsText: {marginLeft: 5},
  button: {
    height: 60,
    backgroundColor: '#ff3300',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  imageButton: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    marginLeft: 15,
  },
  selectedImage: {
    width: 70,
    height: 70,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
    marginLeft: 30,
  },
});

export default TripDetails;
