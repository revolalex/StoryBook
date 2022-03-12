import React from 'react';
import '../App.css'

import MyMessage from './MyMessage.tsx';
import MyButton from './MyButton';


export default {
  component: MyMessage,
  title: 'MyMessage',
  subcomponents: { MyButton },
};

const Template = args => <MyMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
    messageType:'info',
};

export const Succes = Template.bind({});
Succes.args = {
    messageType:'success',
    buttonText:'Succes',
    backgroundColor:'#50cd4b',
};

export const Warning = Template.bind({});
Warning.args = {
    messageType:'warning',
    buttonText:'Warning',
    backgroundColor:'#f1ae43',
};

export const Error = Template.bind({});
Error.args = {
    messageType:'error',
    buttonText:'Error',
    backgroundColor:'red',
};







