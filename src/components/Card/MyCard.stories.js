import React from 'react';
import MyCard from './MyCard.tsx';
import {Default as MyButton} from '../Button/MyButton.stories.js';

export default {
  component: MyCard,
  title: 'MyCard',
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


// use children props to render <MyButton />
export const WithButton = Template.bind({});
WithButton.args = {
  title: "Title",
  empty: false,
  displayMeta: true,
  metaTitle: "metaTitle",
  metaDescription: "metaDescription",
  bordered: true,
  hoverable: true,
  loading: false,
  headStyle: { backgroundColor: "#f0ff" },
  bodyStyle: { backgroundColor: "#fff" },
  children: <span><br/><MyButton {...MyButton.args} /></span>,
};

export const Empty = Template.bind({});
Empty.args = {
  title: "Title",
  empty: true,
  displayMeta: false,
  bordered: true,
  hoverable: true,
  loading: false,
  headStyle: { backgroundColor: "#ececec" },
  bodyStyle: { backgroundColor: "#fff" },
};

