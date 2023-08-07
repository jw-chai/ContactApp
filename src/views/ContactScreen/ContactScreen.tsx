import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {Color} from '../../constants';
import {Button, Header} from '../../components';

interface IContactScreenProps {
  navigation: any;
}

const ContactScreen: React.FC<IContactScreenProps> = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaViewHeader} />
      <SafeAreaView style={styles.safeAreaView}>
        <Header title="Contact list" />
        <View style={styles.container}>
          <Text>ContactScreen</Text>
          <Button
            title="try navigate"
            onPress={() => navigation.navigate('EditContactScreen')}
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
    padding: 18,
  },
});
