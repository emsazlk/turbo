import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#eeeeee',
    borderRadius: 2,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 1
  },

  imageBox: {
    width: '100%',
    aspectRatio: 1.5,
  },

  image: {
    width: '100%',
    height: '100%',
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderRadius: 2,
    overflow: 'hidden'
  },

  imageTitle: {
    backgroundColor: 'red',
    paddingVertical: 4,
    paddingHorizontal: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24
  },

  colorWhite: {
    color: '#ffffff'
  },

  colorGray: {
    color: '#c2c2c2'
  },

  content: {
    padding: 4,
    backgroundColor: '#f2f2f2',
    height: 80,
  }
})