import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const messagePreviewTheme = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    maxHeight: 120,
    paddingVertical: '3%',
    paddingHorizontal: '1%',
    justifyContent: 'space-between',
  },
  imageSegment: {
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  detailsSegment: {
    width: '60%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  detailsTopRow: {
    width: '100%',
    height: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  detailsBottomRow: {
    width: '100%',
    height: '60%',
  },
  detailsText: {
    fontFamily: 'Acme',
  },
});

export default messagePreviewTheme;
