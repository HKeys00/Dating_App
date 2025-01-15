import IconPin from '../../assets/messagesPage/pin.png';
import IconReport from '../../assets/messagesPage/report.png';
import IconUnmatch from '../../assets/messagesPage/unmatch.png';

const getActionButtonIcon = (title: string) => {
  switch (title) {
    case 'Pin':
      return IconPin;
    case 'Report':
      return IconReport;
    case 'Unmatch':
      return IconUnmatch;
  }
};

export default getActionButtonIcon;
