import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ContainerTheme = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 3px rgba(64, 64, 64, 0.5)',
  },
  editButton: {
    position: 'absolute',
    top: -hp(2),
    right: -wp(3),
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
  },

  editButtonImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default ContainerTheme;
