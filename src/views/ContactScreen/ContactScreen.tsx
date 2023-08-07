import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Color} from '../../constants';
import {Header} from '../../components';
import {IData} from '../../interfaces/dataInterface';
import useContactViewController from '../../viewControllers/ContactScreen/useContactViewController';

interface IContactScreenProps {}

const ContactScreen: React.FC<IContactScreenProps> = () => {
  const {
    onNavigateAddContact,
    contactList,
    isLoading,
    isRefreshing,
    onRefresh,
  } = useContactViewController();

  const renderItems = ({item}: {item: IData}) => {
    return (
      <TouchableOpacity
        style={styles.contactList}
        onPress={() => {
          onNavigateAddContact(item);
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
        <Header
          title="Contact list"
          leftComponent={
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/search.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          }
          rightComponent={
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/plus.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          }
        />
        <View style={styles.container}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator animating />
            </View>
          ) : (
            <FlatList
              ListHeaderComponent={
                <View style={styles.contactNumberContainer}>
                  <Text style={styles.label}>
                    {contactList.length} contacts
                  </Text>
                </View>
              }
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              data={contactList}
              renderItem={renderItems}
              keyExtractor={(item: IData) => item.id.toString()}
            />
          )}
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
    flexShrink: 1,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  contactNumberContainer: {
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  label: {
    fontSize: 14,
    color: Color.label,
    letterSpacing: 0.5,
  },
});
