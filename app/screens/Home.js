/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import FIcons from 'react-native-vector-icons/FontAwesome';
import {cards} from '../data/cards';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CARD_WIDTH = windowWidth / 1.5;
const CARD_HEIGHT = windowHeight / 2.3;

const Home = props => {
  const [index, setIndex] = useState(0);
  _renderViews = views => {
    const {cardStyle} = styles;

    return views.map((card, i) => {
      return (
        <ImageBackground
          source={card.name}
          resizeMode="cover"
          imageStyle={{borderRadius: 20}}
          style={[styles.cardStyle, {marginTop: index + 1 == i ? 20 : 0}]}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Details')}>
            <View style={styles.imageCardView}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.textView}>
                  <Text style={styles.coutyText}>{card.country}</Text>
                </View>
              </View>
              <View style={styles.cartView}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {card.place}
                </Text>
                <View style={styles.iconsStyle}>
                  <Icon name="shoppingcart" size={20} color="black" />
                </View>
              </View>
              <Text style={styles.valueTxt}>${card.budget}.00</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      );
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.viewContainer}>
        <View style={styles.homeHeader}>
          <Icons name="filter" size={40} color="black" />
          <Text style={{color: '#FF6700', fontSize: 20, fontWeight: 'bold'}}>
            TOURX
          </Text>
          <Icons name="ios-person-circle" size={40} color="#bf9494" />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.headerTextValues}>Discover</Text>
          <Text style={styles.headerTextValues}>A New World</Text>
        </View>
        <View style={styles.inputView}>
          <View style={styles.searchSection}>
            <Icon
              style={styles.searchIcon}
              name="search1"
              size={20}
              color="#FF6700"
            />
            <TextInput
              style={styles.input}
              placeholder="Search places"
              onChangeText={searchString => {}}
              underlineColorAndroid="transparent"
              placeholderTextColor="#FF6700"
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => {}} style={styles.sliderIcon}>
              <FIcons
                style={styles.searchIcon}
                name="sliders"
                size={25}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          {_renderViews(cards)}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {marginHorizontal: 25, marginBottom: 20},
  headerTextValues: {fontWeight: 'bold', fontSize: 30},
  homeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartView: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  textView: {
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 30,
  },
  imageCardView: {
    backgroundColor: '#ECECEC',
    height: 100,
    width: CARD_WIDTH - 20,
    marginBottom: 10,
    borderRadius: 10,
    opacity: 0.9,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  sliderIcon: {
    backgroundColor: '#FF6700',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
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
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: '#EDDCDC',
    borderRadius: 15,
    width: windowWidth / 1.6,
    height: 50,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#EDDCDC',
    color: '#424242',
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'green',
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 20,
  },
  valueTxt: {fontWeight: 'bold', fontSize: 16, marginLeft: 20},
  iconsStyle: {
    height: 30,
    width: 30,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 30,
  },
  coutyText: {
    color: '#FF6700',
    padding: 5,
    fontSize: 12,
    paddingHorizontal: 10,
  },
});

export default Home;
