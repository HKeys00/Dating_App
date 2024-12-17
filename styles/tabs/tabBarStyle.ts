import TabBarButton from '@/components/tabBar/tabBarButton';
import { StyleSheet } from 'react-native';

const tabBarStyle = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#F4DEC1',
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    height: '5%',
    width: '100%',
  },
  tabBarButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '20%',
  },
  tabBarButtonIcon: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
});

export default tabBarStyle;
