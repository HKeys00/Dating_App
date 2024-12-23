import { StyleSheet } from 'react-native';

const coreTheme = StyleSheet.create({
  solidBackground: {
    backgroundColor: '#F4DEC1',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  blackShadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    height: '95%',
    width: '100%',
    backgroundColor: '#000000',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
});

export default coreTheme;
