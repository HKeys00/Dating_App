import React from 'react';
import { PlatformPressable } from '@react-navigation/elements';
import { NavigationRoute, ParamListBase } from '@react-navigation/native';
import { useLinkBuilder } from '@react-navigation/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';

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
  const onPress = () => {
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
      style={{ flex: 1 }}
    >
      <Image src={`${image}${isFocused ? `_focused` : ''}.png`}></Image>
      <Text>{image}</Text>
    </PlatformPressable>
  );
};

export default TabBarButton;
