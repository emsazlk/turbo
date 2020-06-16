import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  transparent: {
    backgroundColor: 'transparent'
  },

  container: StyleSheet.flatten([{
    justifyContent: 'center',
    alignItems: 'center',
  }, StyleSheet.absoluteFill]),

  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000'
  },
});