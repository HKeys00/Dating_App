import React from 'react';
import { View, Text } from 'react-native';
import pageTheme from '@/styles/pages/pageTheme';
/**
 * The Page component is a wrapper for the content of each page.
 */
interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, children }: PageProps) => {
  return (
    <View style={pageTheme.pageContainer}>
      <View style={pageTheme.pageBackground} />
      <View style={pageTheme.page}>
        <Text>{title}</Text>
        {children}
      </View>
    </View>
  );
};

export default Page;
