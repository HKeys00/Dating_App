import { StyleSheet } from 'react-native';

const headerTheme = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  nameContainer: {
    width: '40%',
    maxWidth: 200,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: '10%',
  },
  nameText: {
    fontSize: 20,
    fontFamily: 'Acme',
    textAlign: 'center',
  },
  profileImageContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
    left: 0,
  },
  profileStatsContainer: {
    width: '30%',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    right: 0,
    alignSelf: 'flex-end',
  },
});

export default headerTheme;
