import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import PreferenceModal from '@/components/preferences/preferenceModal/preferenceModal';
import RangeInput from '@/components/generic/rangeInput/rangeInput';
import SelectInput from '@/components/generic/selectInput/selectInput';
import SliderInput from '@/components/generic/sliderInput/sliderInput';

interface PreferenceContainerProps {
  children?: React.ReactNode;
}

const PreferenceContainer: React.FC<PreferenceContainerProps> = () => {
  const lookingForOptions = ['Men', 'Women', 'Everyone'];

  return (
    <ScrollView>
      <PreferenceModal title={"I'm looking for"} options={['Option 1', 'Option 2', 'Option 3']} onValueChange={(value) => console.log(value)}>
        <SelectInput values={lookingForOptions} onSelectedChanged={() => {}} />
      </PreferenceModal>
      <PreferenceModal title={'Age Range'} options={['18-25', '26-35', '36-45']} onValueChange={(value) => console.log(value)}>
        <RangeInput step={1} min={18} max={99} />
      </PreferenceModal>
      <PreferenceModal title={'Max Distance'} options={['5 miles', '10 miles', '20 miles']} onValueChange={(value) => console.log(value)}>
        <SliderInput min={0} max={100} suffix="km" step={5} value={0} />
      </PreferenceModal>
      <PreferenceModal title={'Ethnicity'} options={['Asian', 'Black', 'Caucasian', 'Hispanic']} onValueChange={(value) => console.log(value)}>
        <SelectInput values={['Asian', 'Black', 'Caucasian', 'Hispanic']} onSelectedChanged={() => {}} multiple />
      </PreferenceModal>
    </ScrollView>
  );
};

export default PreferenceContainer;
