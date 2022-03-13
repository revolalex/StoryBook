import React from 'react';
import '../../App.css';

import MyCard from './MyCard.tsx';

import {Default as MyButton} from '../MyButton.stories.js';



export default {
  component: MyCard,
  title: 'MyCard',
  // subcomponents: { MyButton },
  // use to render the component in a container
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = args => <MyCard {...args} />;


export const Default = Template.bind({});
Default.args = {
  title: "Title",
  empty: false,
  displayMeta: true,
  metaTitle: "metaTitle",
  metaDescription: "metaDescription",
  bordered: true,
  hoverable: true,
  loading: false,
  headStyle: { backgroundColor: "#ececec" },
  bodyStyle: { backgroundColor: "#fff" },
};


export const WithButton = (args) => (
  <MyCard {...Default.args}>
    <br/>
    <MyButton {...MyButton.args} />
  </MyCard>
);



export const OneItem = Template.bind({});
OneItem.args = {
  children: <MyButton {...MyButton.args} />,
};



