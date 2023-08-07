import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {Color} from '../../constants';
import {Button, Header} from '../../components';
import useEditContactViewController from '../../viewControllers/ContactScreen/useEditContactViewController';

interface IEditContactScreenProps {
  route: any;
}

const EditContactScreen: React.FC<IEditContactScreenProps> = ({route}) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    onBack,
    onChangeText,
    onFocusFirstName,
    onFocusLastName,
    onFocusEmail,
    onFocusPhone,
    onDismissKeyboard,
    firstNameRef,
    lastNameRef,
    emailRef,
    phoneRef,
    onSave,
    isUpdating,
  } = useEditContactViewController({contact: route?.params?.contact});
  return (
    <>
      <SafeAreaView style={styles.safeAreaViewHeader} />
      <SafeAreaView style={styles.safeAreaView}>
        <Header title="Edit Contact" onBack={onBack} />
        <KeyboardAvoidingView
          style={styles.wrapper}
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}>
          <ScrollView style={styles.container}>
            <View style={styles.avatarContainer}>
              <TouchableOpacity style={styles.avatar} />
              <TouchableOpacity>
                <Text style={styles.addText}>Add profile photo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <Text style={styles.title}>
                First name<Text style={styles.red}> *</Text>
              </Text>
              <TouchableOpacity
                style={styles.textInputBox}
                onPress={onFocusFirstName}>
                <TextInput
                  ref={firstNameRef}
                  style={styles.textInput}
                  placeholder={'Input first name'}
                  value={firstName}
                  onChangeText={text => onChangeText(text, 'firstName')}
                  returnKeyLabel="Next" //android
                  returnKeyType="next"
                  onSubmitEditing={onFocusLastName}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <Text style={styles.title}>
                Last name<Text style={styles.red}> *</Text>
              </Text>
              <Text style={styles.label}>Surname / Family name</Text>
              <TouchableOpacity
                style={styles.textInputBox}
                onPress={onFocusLastName}>
                <TextInput
                  ref={lastNameRef}
                  style={styles.textInput}
                  placeholder={'Input last name'}
                  value={lastName}
                  onChangeText={text => onChangeText(text, 'lastName')}
                  returnKeyLabel="Next" //android
                  returnKeyType="next"
                  onSubmitEditing={onFocusEmail}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <Text style={styles.title}>Email</Text>
              <TouchableOpacity
                style={styles.textInputBox}
                onPress={onFocusEmail}>
                <TextInput
                  ref={emailRef}
                  style={styles.textInput}
                  placeholder={'Input email'}
                  value={email}
                  onChangeText={text => onChangeText(text, 'email')}
                  returnKeyLabel="Next" //android
                  returnKeyType="next"
                  onSubmitEditing={onFocusPhone}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.block}>
              <Text style={styles.title}>Phone</Text>
              <TouchableOpacity
                style={styles.textInputBox}
                onPress={onFocusPhone}>
                <TextInput
                  ref={phoneRef}
                  keyboardType="numeric"
                  style={styles.textInput}
                  placeholder={'Input phone'}
                  value={phone}
                  onChangeText={text => onChangeText(text, 'phone')}
                  returnKeyLabel="Next" //android
                  returnKeyType="next"
                  onSubmitEditing={onDismissKeyboard}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <Button title={'Save'} onPress={onSave} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        {isUpdating && (
          <View style={styles.loaderContainer}>
            <View style={styles.loader}>
              <ActivityIndicator color={Color.primary} animating />
            </View>
          </View>
        )}
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
  wrapper: {
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
    marginBottom: 24,
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
  red: {
    color: '#ff6565',
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 6,
  },
  addText: {
    fontSize: 16,
    color: Color.primary,
    marginTop: 12,
  },
  loaderContainer: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    padding: 32,
    borderRadius: 8,
    backgroundColor: Color.primary + '22',
  },
});
