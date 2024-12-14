import { StyleSheet } from 'react-native';

const pageTheme = StyleSheet.create({
  pageContainer: {
    position: 'absolute',
    width: '100%',
    height: '95%',
    top: 0,
    left: 0,
    zIndex: 1,
  },

  pageBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 0,

    backgroundColor: '#000000',
    borderBottomStartRadius: 17,
    borderBottomEndRadius: 17,
  },

  page: {
    position: 'absolute',
    height: '100%',
    width: '100%',

    backgroundColor: '#F4DEC1',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomColor: '#00000',
    borderBottomWidth: 5,
  },
});

export default pageTheme;
