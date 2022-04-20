/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import RBSheet from '../components/BottomSheet';
import firebase from '../config/firebase.config';

const Users = props => {
  let bottomSheet;
  const [interestsList, setInterests] = useState([]);
  const [selectedIntrest, setSelectedI] = useState([]);
  const [selectedIntrestFalgs, setSelectedFlag] = useState([]);
  const [listUsers, setUsers] = useState([]);

  const fetchBlogs = async () => {
    const snapshot = await firebase
      .firestore()
      .collection('MyCollection')
      .get();
    let usesSnapshot = [];
    usesSnapshot = snapshot.docs.map(doc => doc.data());
    setUsers(prev => (prev = usesSnapshot));
    let listinterests = [];
    usesSnapshot.forEach(data => {
      const list = listinterests;
      listinterests = list.concat(data.interests);
    });
    const uniquesInterests = listinterests.filter(
      (ele, index) => listinterests.indexOf(ele) == index,
    );
    setInterests(prev => (prev = uniquesInterests));
    let dataFlagArray = [];
    const dataFlags = dataFlagArray.concat(uniquesInterests);
    const flags = dataFlags.fill(false);
    setSelectedFlag(prev => (prev = flags));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#EBECF0'}}>
      <RBSheet
        ref={ref => {
          bottomSheet = ref;
        }}
        duration={250}>
        {interestsList.map((ele, index) => {
          let flagsData = [...selectedIntrestFalgs];
          let selectedData = [...selectedIntrest];
          return (
            <TouchableOpacity
              onPress={() => {
                flagsData[index] = flagsData[index] ? false : true;
                setSelectedFlag(prev => (prev = flagsData));
                if (flagsData[index]) {
                  selectedData.push(ele);
                  setSelectedI(prev => (prev = selectedData));
                } else {
                  selectedData = selectedData.filter(item => item !== ele);
                  setSelectedI(prev => (prev = selectedData));
                }
              }}
              style={[styles.rebSheetView,{ backgroundColor: selectedIntrestFalgs[index] ? '#FF6700' : 'white',}]}>
              <Text style={{color: 'black'}}>{ele}</Text>
            </TouchableOpacity>
          );
        })}
      </RBSheet>
      <View style={styles.herader}>
        <Text style={styles.headerText}>UserDetails</Text>
        <Icons
          name="filter"
          size={30}
          color="#FF6700"
          style={{marginRight: 20}}
          onPress={() => bottomSheet.open()}
        />
      </View>
      <FlatList
        data={listUsers}
        extraData={selectedIntrest}
        renderItem={({item}) => {
          const valuesInterset = [...selectedIntrest];
          const found =
            valuesInterset.length > 0
              ? item.interests.some(r => valuesInterset.includes(r))
              : true;
          return found ? (
            <View style={styles.card}>
              <View
                style={{
                  margin: 10,
                }}>
                <Text style={{fontSize: 18}}>{item.name}</Text>
                <Text style={{marginVertical: 5, color: '#FF6700'}}>
                  {item.gmail}
                </Text>
                <Text style={{marginVertical: 5, fontWeight: 'bold'}}>
                  {item.interests.toString()}
                </Text>
              </View>
            </View>
          ) : null;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  herader: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6700',
  },
  rebSheetView: {
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
  },
});

export default Users;
