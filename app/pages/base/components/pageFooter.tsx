import React from 'react';
import { View } from 'react-native';
import pageTheme from '@/app/pages/base/styles/pageTheme';

/**
 * The Page footer component is a wrapper for the content of each page.
 */
interface PageFooterProps {
  children: React.ReactNode;
}

const PageBody: React.FC<PageFooterProps> = ({ children }: PageFooterProps) => {
  return (
    <View style={pageTheme.pageFooter}>
      <View>{children}</View>
    </View>
  );
};

export default PageBody;
