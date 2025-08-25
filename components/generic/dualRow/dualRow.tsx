import React from 'react';
import { View } from 'react-native';
import dualRowTheme from './styles/dualRow';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface DualRowProps {
  padding: number;
  children: React.ReactNode;
}

const DualRow: React.FC<DualRowProps> = ({ padding, children }) => {
  return <View style={[dualRowTheme.dualRow, { paddingHorizontal: wp(padding) }]}>{children}</View>;
};

export default DualRow;
