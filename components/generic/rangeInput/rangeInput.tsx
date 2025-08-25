import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RangeInputTheme from './rangeInputTheme';
import { TextInput } from 'react-native-gesture-handler';

interface RangeInputProps {
  step: number;
  min: number;
  max: number;
}

const RangeInput: React.FC<RangeInputProps> = ({ step, min, max }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (input: string) => {
    const value = parseFloat(input);

    const newMinValue = Math.min(value, maxValue - step);
    setMinValue(newMinValue);
  };

  const handleMaxChange = (input: string) => {
    const value = parseFloat(input);
    const newMaxValue = Math.max(value, minValue + step);
    setMaxValue(newMaxValue);
  };

  return (
    <View style={RangeInputTheme.container}>
      <View style={RangeInputTheme.inputColumn}>
        <Text style={RangeInputTheme.label}>Min</Text>
        <TextInput style={RangeInputTheme.input} keyboardType="number-pad" onChangeText={handleMinChange} />
      </View>
      <View style={RangeInputTheme.inputColumn}>
        <Text style={RangeInputTheme.label}>Max</Text>
        <TextInput style={RangeInputTheme.input} keyboardType="number-pad" onChangeText={handleMaxChange} />
      </View>
      {/* <input type="range" value={minValue} min={min} max={max} step={step} onChange={handleMinChange} />
      <input type="range" value={maxValue} min={min} max={max} step={step} onChange={handleMaxChange} /> */}
    </View>
  );
};

export default RangeInput;
