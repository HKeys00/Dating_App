import { StyleSheet } from 'react-native';

const messagePageTheme = StyleSheet.create({
  scrollableContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '80%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    gap: 1,
  },
  previewContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '30%',
    width: '95%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderColor: '#000000',
    borderWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginTop: -20,
  },
  imageContainer: {
    height: '100%',
    width: '30%',
  },
  textContainer: {},
  timeStampContainer: {},
});

export default messagePageTheme;
