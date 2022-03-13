import React from 'react';

import MyIcons from './MyIcons.tsx';

export default {
  component: MyIcons,
  title: 'MyIcons',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <MyIcons {...args} />;

export const Default = Template.bind({});
Default.args = {
    className:undefined,
    rotate:undefined,
    spin:undefined,
    twoToneColor:undefined,
    backgroundColor:undefined,

};

