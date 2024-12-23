import { StyleSheet } from 'react-native';

const pageTheme = StyleSheet.create({
  page: {
    display: 'flex',
    position: 'absolute',
    height: '99.8%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 3,
    backgroundColor: '#F4DEC1',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  pageHeader: {
    height: '20%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 50,
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerLineBreak: {
    width: '70%',
    height: 1,
    backgroundColor: '#000000',
    marginTop: 20,
  },
  pageBody: {
    height: '80%',
    width: '100%',
  },
});

export default pageTheme;
