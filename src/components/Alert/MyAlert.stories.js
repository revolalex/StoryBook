import React from 'react';
import '../../App.css'
import MyAlert from './MyAlert.tsx';


export default {
  component: MyAlert,
  title: 'MyAlert',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <MyAlert {...args}  />;

export const Default = Template.bind({});
Default.args = {
    message:"This is an alert message",
    description:'description',
    type:"success",
    banner:true,
    showIcon:true,
    closable:false,
    closeText:undefined,
    backgroundColor:undefined,
};
