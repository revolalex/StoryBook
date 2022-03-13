import React from 'react';

import MyButton from './MyButton.tsx';


export default {
  component: MyButton,
  title: 'MyButton',
  // use to render the component in a container
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <MyButton {...args}  />;


export const Default = Template.bind({});
Default.args = {
    label:"default",
    type:"primary",
    disabled:false,
    loading:false,
    ghost:false,
    shape:undefined,
    size:undefined,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Search',
  icon: true,
};


