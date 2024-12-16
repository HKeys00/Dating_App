import React from 'react';
import { View, Text } from 'react-native';
import pageTheme from '@/styles/pages/pageTheme';
import coreTheme from '@/styles/coreTheme';

/**
 * The Page component is a wrapper for the content of each page.
 */
interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, children }: PageProps) => {
  return (
    <View style={coreTheme.solidBackground}>
      <View style={coreTheme.blackShadow}>
        <View style={pageTheme.page}>
          <View style={pageTheme.pageHeader}>
            <Text>{title}</Text>
          </View>
          <View style={pageTheme.pageBody}>{children}</View>
        </View>
      </View>
    </View>
  );
};

export default Page;
