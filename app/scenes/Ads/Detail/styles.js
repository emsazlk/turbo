import { StyleSheet } from 'react-native';
import { INDENT } from 'app/config/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },

  content: {
    flexGrow: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
  },
  
  content: {
    padding: INDENT
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
  }

}); 