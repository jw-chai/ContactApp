import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Color} from '../../constants';
import {Button, Header} from '../../components';

interface IEditContactScreenProps {
  navigation: any;
}

const EditContactScreen: React.FC<IEditContactScreenProps> = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaViewHeader} />
      <SafeAreaView style={styles.safeAreaView}>
        <Header title="Edit Contact" onBack={() => navigation.goBack()} />
        <ScrollView style={styles.container}>
          <View style={styles.avatarContainer}>
            <TouchableOpacity style={styles.avatar} />
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>First name</Text>
            <TouchableOpacity style={styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                placeholder={'Input first name'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Last name</Text>
            <TouchableOpacity style={styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                placeholder={'Input last name'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Email</Text>
            <TouchableOpacity style={styles.textInputBox}>
              <TextInput style={styles.textInput} placeholder={'Input email'} />
            </TouchableOpacity>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>Phone</Text>
            <TouchableOpacity style={styles.textInputBox}>
              <TextInput style={styles.textInput} placeholder={'Input phone'} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button title={'Save'} onPress={() => {}} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EditContactScreen;

const styles = StyleSheet.create({
  safeAreaViewHeader: {
    backgroundColor: Color.primary,
  },
  safeAreaView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 18,
  },
  textInput: {
    fontSize: 16,
    color: Color.text,
  },
  textInputBox: {
    padding: 18,
    backgroundColor: Color.bg,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius: 8,
  },
  block: {
    marginBottom: 18,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 16,
    color: Color.text,
    marginBottom: 6,
  },
  buttonContainer: {
    marginTop: 18,
  },
});
