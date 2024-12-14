import { StyleSheet } from 'react-native';

const tabBarStyle = StyleSheet.create({
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '5%',
    minHeight: 50,

    backgroundColor: '#F4DEC1',
  },
});

export default tabBarStyle;
