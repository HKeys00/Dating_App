import React from 'react';
import { PlatformPressable } from '@react-navigation/elements';
import { NavigationRoute, ParamListBase } from '@react-navigation/native';
import { useLinkBuilder } from '@react-navigation/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Image, GestureResponderEvent } from 'react-native';
import tabBarStyle from './styles/tabBar';
import getTabBarIcon from './helper/tabBarIconHelper';

/**
 * The tab bar button component.
 */
interface TabBarButtonProps {
  isFocused: boolean;
  image: string;
  options: BottomTabNavigationOptions;
  route: NavigationRoute<ParamListBase, string>;
  onNavigation: (route: NavigationRoute<ParamListBase, string>) => void;
}

const TabBarButton: React.FC<TabBarButtonProps> = ({ isFocused, image, route, options, onNavigation }: TabBarButtonProps) => {
  const { buildHref } = useLinkBuilder();
  const onPress = (event: GestureResponderEvent) => {
    event.preventDefault();
    if (!isFocused) {
      onNavigation(route);
    }
  };
  return (
    <PlatformPressable
      href={buildHref(route.name, route.params)}
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarButtonTestID}
      onPress={onPress}
      style={tabBarStyle.tabBarButton}
      android_ripple={{ color: 'transparent', radius: 0 }}
    >
      <Image style={tabBarStyle.tabBarButtonIcon} source={getTabBarIcon(image)}></Image>
    </PlatformPressable>
  );
};

export default TabBarButton;
