import React from 'react';
import '../App.css'

import MyIcons from './MyIcons.tsx';

export default {
  component: MyIcons,
  title: 'MyIcons',
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

