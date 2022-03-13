import React from 'react';

import MyProgress from './MyProgress.tsx';
import '../../App.css'


export default {
  component: MyProgress,
  title: 'MyProgress',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <MyProgress {...args} />;

export const Line = Template.bind({});
Line.args = {
  percent: 50,
  type: "line",
  status: "success",
};

export const Circle = Template.bind({});
Circle.args = {
  percent: 75,
  type: "circle",
  showInfo: true,
  strokeColor: {
    '0%': '#108ee9',
    '100%': '#87d068',
  },
  strokeWidth: 6,
  width: 132,

};

export const Steps = Template.bind({});
Steps.args = {
  type: "line",
  steps: 10,
  percent: 60,
  showInfo: true,

};

export const Dashboard = Template.bind({});
Dashboard.args = {
  type: "dashboard",
  steps: 10,
  gapDegree: 75,
  gapPosition: "bottom",
  strokeWidth: 6,
  width: 132,
  showInfo: true,



};

