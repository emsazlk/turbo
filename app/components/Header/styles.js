import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 5
  },

  label: {
    fontSize: 13,
    fontWeight: '400',
    color: '#ffffff',
  },

  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flexShrink: 1,
    alignSelf: 'center',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '700',
    color: '#ffffff',
  },
});