import { StyleSheet } from 'react-native';
import { NAVBAR_HEIGHT } from 'app/config/constants';

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  navbar: {
    height: NAVBAR_HEIGHT,
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    elevation: 0.2,
    backgroundColor: 'red'
  },

  title: {
    fontSize: 16,
    color: '#FFFFFF'
  },

  column: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  top: {
    height: 42,
    backgroundColor: 'rgb(251, 251, 249)',
  },

});