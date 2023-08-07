import React, {ReactNode} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import {Color} from '../constants';

interface HeaderProps {
  onBack?: () => void;
  isClose?: boolean;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  title?: string | null | undefined;
}

const Header: React.FC<HeaderProps> = ({
  leftComponent,
  onBack,
  rightComponent,
  title,
}) => {
  return (
    <>
      <StatusBar
        backgroundColor={Color.primary}
        animated={true}
        translucent={false}
        barStyle="light-content"
      />

      <View style={styles.header}>
        <View style={styles.left}>
          {leftComponent && leftComponent}
          {onBack && !leftComponent && (
            <TouchableHighlight
              style={styles.backIconButton}
              underlayColor={Color.text + 11}
              onPress={onBack}>
              <Image
                source={require('../assets/images/back.png')}
                style={styles.backIcon}
              />
            </TouchableHighlight>
          )}
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right}>{rightComponent}</View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 54,
    backgroundColor: Color.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: '100%',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  backIconButton: {
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
