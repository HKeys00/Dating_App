import React from 'react';
import { View, Text } from 'react-native';
import pageTheme from '@/app/pages/base/styles/pageTheme';

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
      <Text style={pageTheme.headerText}>{title}</Text>
      <View style={pageTheme.headerLineBreak} />
      <View>{children}</View>
    </View>
  );
};

export default Page;
