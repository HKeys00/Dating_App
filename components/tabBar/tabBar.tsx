import React from 'react';
import TabBarButton from './tabBarButton';
import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationRoute, ParamListBase } from '@react-navigation/native';
import tabBarStyle from '@/styles/tabs/tabBarStyle';

const TabBar = ({ state, descriptors, navigation, insets }: BottomTabBarProps) => {
  const exclude = ['_sitemap', '+not-found'];

  const onNavigation = (route: NavigationRoute<ParamListBase, string>) => {
    navigation.navigate(route.name, route.params);
  };

  return (
    <View style={tabBarStyle.tabBar}>
      {state.routes.map((route, index) => {
        if (exclude.some((excludedRoute) => route.key.includes(excludedRoute))) {
          return null;
        }

        console.log(route.key);
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        return <TabBarButton isFocused={isFocused} image={options.title ?? ''} options={options} route={route} onNavigation={() => onNavigation(route)} />;
      })}
    </View>
  );
};

export default TabBar;
