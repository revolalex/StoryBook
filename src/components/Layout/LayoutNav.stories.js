import React from 'react';
import LayoutNav from './LayoutNav.tsx';
import Mycard from '../Card/MyCard';




export default {
  component: LayoutNav,
  title: 'LayoutNav',
  parameters: {
    layout: 'fullscreen',
  },
  subcomponents: { Mycard },
  // use to render the component in a container
};

export const Empty = (args) => <LayoutNav {...args} />;


export const WithCard = (args) => (
  <LayoutNav {...args}>
    <Mycard  />
  </LayoutNav>
);












