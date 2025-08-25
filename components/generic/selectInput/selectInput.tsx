import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import SelectInputTheme from './selectInputTheme';
import { TextInput } from 'react-native-gesture-handler';

interface SelectInputProps {
  values: string[];
  onSelectedChanged: (value: string[]) => void;
  multiple?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ values, onSelectedChanged, multiple = false }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const handleValueChange = (value: string) => {
    if (multiple) {
      setSelectedValues((prev) => {
        if (prev.includes(value)) {
          return prev.filter((v) => v !== value);
        } else {
          return [...prev, value];
        }
      });
    } else {
      setSelectedValues([value]);
    }
  };

  return (
    <View style={SelectInputTheme.container}>
      {values.map((option, index) => (
        <TouchableOpacity
          key={option}
          onPress={() => handleValueChange(option)}
          style={[SelectInputTheme.option, selectedValues.includes(option) ? SelectInputTheme.selectedOption : {}]}
        >
          <Text style={SelectInputTheme.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SelectInput;
