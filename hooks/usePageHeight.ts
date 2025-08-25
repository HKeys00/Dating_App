import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

/**
 * This hook calculates the height of the page content area, by
 * subtracting the height of the tab bar and top spacing
 * from the total screen height.
 * @returns The height of the page content area.
 */
const usePageHeight = (): number => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const screenHeight = Dimensions.get('window').height;
    const tabBarHeight = Math.min(screenHeight * 0.07, 50);
    const topSpacing = 25;
    const pageHeight = screenHeight - tabBarHeight - topSpacing;

    setHeight(pageHeight);
  }, []);

  return height;
};

export default usePageHeight;
