import { StyleSheet } from 'react-native';

const feedPageTheme = StyleSheet.create({
  feedContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  feedProfileContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedProfile: {
    width: '90%',
    height: '95%',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
  },
});

export default feedPageTheme;
