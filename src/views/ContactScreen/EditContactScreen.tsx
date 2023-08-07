import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {Color} from '../../constants';
import {Header} from '../../components';

interface IEditContactScreenProps {
  navigation: any;
}

const EditContactScreen: React.FC<IEditContactScreenProps> = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaViewHeader} />
      <SafeAreaView style={styles.safeAreaView}>
        <Header title="Edit Contact" onBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <Text>ContactScreen</Text>
        </View>
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
    flex: 1,
    padding: 18,
  },
});
