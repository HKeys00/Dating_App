import React from 'react';
import { View, Text } from 'react-native';
import pageTheme from '@/styles/pages/pageTheme';
import coreTheme from '@/styles/coreTheme';

/**
 * The Page Header component is a wrapper for the content of each page.
 */
interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, children }: PageProps) => {
  return (
    <View style={pageTheme.pageHeader}>
      <Text>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

export default Page;
