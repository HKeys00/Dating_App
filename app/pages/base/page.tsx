import React from 'react';
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import pageTheme from '@/app/pages/base/styles/pageTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePageHeight from '@/hooks/usePageHeight';

/**
 * The Page component is a wrapper for the content of each page.
 */
interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  const insets = useSafeAreaInsets();
  const height = usePageHeight();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
      <View style={[pageTheme.solidBackground]}>
        <View style={pageTheme.triangle} />
        <View style={[pageTheme.page, { height: height }]}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default Page;
