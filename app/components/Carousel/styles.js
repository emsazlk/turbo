import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'stretch',
    aspectRatio: !Platform.isPad ? 1.1 / 1 : null,
    height: !Platform.isPad ? 'auto' : 500,
    maxHeight: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  fullPlace: {
    flex: 1
  },
  slide: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  hide: {
    opacity: 0,
  },
  active: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  icon: StyleSheet.flatten([
    StyleSheet.absoluteFill, {
      justifyContent: 'center',
      alignItems: 'center'
    }
  ]),

  paginationContainer: {
    paddingVertical: 8,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexWrap: 'wrap'
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4
  }
});