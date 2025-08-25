import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface SliderInputProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onValueChange?: (value: number) => void;
}

const SliderInput: React.FC<SliderInputProps> = ({ value, min, max, step, suffix, onValueChange }) => {
  const [displayValue, setDisplayValue] = React.useState(value);

  const handleValueChange = (newValue: number) => {
    setDisplayValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };
  return (
    <View style={{ width: '100%', paddingVertical: 10, alignItems: 'center' }}>
      <Slider
        style={{ width: '90%', height: 40 }}
        minimumValue={min}
        maximumValue={max}
        value={value}
        onValueChange={(val) => setDisplayValue(val)}
        onSlidingComplete={handleValueChange}
        step={step ?? 1}
      />
      <Text>{displayValue + ' ' + suffix}</Text>
    </View>
  );
};

export default SliderInput;
