import IconFeed from '../../assets/tabIcons/feed.png';
import IconMatches from '../../assets/tabIcons/matches.png';
import IconMessages from '../../assets/tabIcons/messages.png';
import IconSpotlight from '../../assets/tabIcons/spotlight.png';
import IconProfile from '../../assets/tabIcons/profile.png';

const getTabBarIcon = (title: string) => {
  switch (title) {
    case 'Feed':
      return IconFeed;
    case 'Matches':
      return IconMatches;
    case 'Messages':
      return IconMessages;
    case 'Spotlight':
      return IconSpotlight;
    case 'Profile':
      return IconProfile;
  }
};

export default getTabBarIcon;
