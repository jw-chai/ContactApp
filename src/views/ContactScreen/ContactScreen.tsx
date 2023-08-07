import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Color} from '../../constants';
import {Header} from '../../components';
import {IData} from '../../interfaces/dataInterface';
import data from '../../models/api/data.json';

interface IContactScreenProps {
  navigation: any;
}

const ContactScreen: React.FC<IContactScreenProps> = ({navigation}) => {
  const renderItems = ({item}: {item: IData}) => {
    return (
      <TouchableOpacity
        style={styles.contactList}
        onPress={() => {
          navigation.navigate('EditContactScreen');
        }}>
        <View style={styles.avatar} />
        <Text style={styles.paragraph} numberOfLines={2}>
          {item?.firstName} {item?.lastName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaViewHeader} />
      <SafeAreaView style={styles.safeAreaView}>
        <Header title="Contact list" />
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItems}
            keyExtractor={(item: IData) => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  safeAreaViewHeader: {
    backgroundColor: Color.primary,
  },
  safeAreaView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contactList: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexShrink: 1,
  },
  avatar: {
    borderRadius: 35,
    height: 70,
    width: 70,
    marginRight: 16,
    backgroundColor: '#eee',
  },
  paragraph: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 24,
    color: Color.text,
  },
});
