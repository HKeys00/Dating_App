import React from 'react';
import preferenceWheelStyle from './preferenceModalStyle';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import PickerIcon from '@/assets/profilePage/pickerIcon.png';
import CloseButton from '@/components/generic/closeButton/closeButton';

interface PreferenceModalProps {
  title: string;
  options: string[];
  onValueChange: (value: string) => void;
  children?: React.ReactNode;
}

const PreferenceWheel: React.FC<PreferenceModalProps> = ({ title, options, onValueChange, children }) => {
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const onWheelPress = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity style={preferenceWheelStyle.container} onPress={onWheelPress}>
        <View style={preferenceWheelStyle.picker}>
          <Text style={preferenceWheelStyle.titleText}>{title}</Text>
          <Text style={preferenceWheelStyle.optionText}>{selectedValue ?? options[0]}</Text>
        </View>
        <Image source={PickerIcon} style={{ width: 24, height: 24, marginLeft: 10 }} />
      </TouchableOpacity>
      {isModalVisible && (
        <Modal animationType="fade" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
          <View style={preferenceWheelStyle.overlay}>
            <View style={preferenceWheelStyle.modalContainer}>
              <View style={preferenceWheelStyle.modalHeader}>
                <Text style={preferenceWheelStyle.titleText}>{title}</Text>
                <CloseButton size={100} onPress={() => setIsModalVisible(false)} />
              </View>
              <View style={preferenceWheelStyle.modalBody}>{children}</View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};
export default PreferenceWheel;
