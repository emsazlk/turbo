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

  header: {
    padding: INDENT,
    backgroundColor: '#f2f2f2',
    backgroundColor: 'gray',
  },

  title: {
    fontWeight: 'bold',
    color: '#000000'
  },

  box: {
    padding: 4,
    width: '50%'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: 4,
  }
}); 