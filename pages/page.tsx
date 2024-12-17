import React from 'react';
import { View, Text } from 'react-native';
import pageTheme from '@/styles/pages/pageTheme';
import coreTheme from '@/styles/coreTheme';

/**
 * The Page component is a wrapper for the content of each page.
 */
interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  return (
    <View style={coreTheme.solidBackground}>
      <View style={coreTheme.blackShadow}>
        <View style={pageTheme.page}>
          <View>{children}</View>
        </View>
      </View>
    </View>
  );
};

export default Page;
