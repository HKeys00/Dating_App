import React from 'react';
import { Redirect } from 'expo-router';
import FeedPage from './tabs';

// This will automatically redirect to your tabs layout
const IndexPage: React.FC = () => {
  return <Redirect href={'/tabs'} />;
};

export default IndexPage;
