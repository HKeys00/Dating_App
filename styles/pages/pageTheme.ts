import { StyleSheet } from 'react-native';

const pageTheme = StyleSheet.create({
  page: {
    display: 'flex',
    position: 'absolute',
    height: '99.7%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 3,
    backgroundColor: '#F4DEC1',
    borderBottomStartRadius: 17,
    borderBottomEndRadius: 17,
  },
  pageHeader: {
    flex: 1,
  },
  pageBody: {
    flex: 8,
  },
});

export default pageTheme;
