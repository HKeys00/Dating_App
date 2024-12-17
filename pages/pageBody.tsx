import React from 'react';
import { View } from 'react-native';
import pageTheme from '@/styles/pages/pageTheme';

/**
 * The Page Body component is a wrapper for the content of each page.
 */
interface PageBodyProps {
  children: React.ReactNode;
}

const PageBody: React.FC<PageBodyProps> = ({ children }: PageBodyProps) => {
  return (
    <View style={pageTheme.pageBody}>
      <View>{children}</View>
    </View>
  );
};

export default PageBody;
