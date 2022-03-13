import React from 'react';
import { Row, Col } from "antd";
import MyGraphicCard from './MyGraphicCard.tsx';


export default {
  component: MyGraphicCard,
  title: 'MyGraphicCard',
  // use to render the component in a container
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>

        <Story />
      </div>
    ),
  ],
};

const Template = args => <MyGraphicCard {...args} />;

const GridTemplate = args => <Row gutter={8}>
  <Col className="gutter-row" span={12}>
    <MyGraphicCard
      {...args}
    />
  </Col>
  <Col className="gutter-row" span={12}>
    <MyGraphicCard
      {...args}
    />
  </Col>
</Row>


export const Default = Template.bind({});
Default.args = {
  size: "default",
  title: "Title",
  bordered: true,
  hoverable: true,
  loading: false,
  displayMeta: true,
  metaTitle: "metaTitle",
  metaDescription: "metaDescription",
  headStyle: { backgroundColor: "#ececec" },
  bodyStyle: { backgroundColor: "#fff" },
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: "First Row 2",
  style: { width: 600 },
  imgUrl: "https://tuttonet.com/wp-content/uploads/2019/04/high-tech1.jpg",
  size: "default",

  bordered: true,
  hoverable: true,
  loading: false,
  displayMeta: true,
  metaTitle: "metaTitle",
  metaDescription: "metaDescription",
  headStyle: { backgroundColor: "#ececec" },
  bodyStyle: { backgroundColor: "#fff" },
};


export const Row2Cards = GridTemplate.bind({});
Row2Cards.args = {
  title: "First Row 2",
  style: { minWidth: "90%" },
  imgUrl: "https://tuttonet.com/wp-content/uploads/2019/04/high-tech1.jpg",
  size: "default",

  bordered: true,
  hoverable: true,
  loading: false,
  displayMeta: true,
  metaTitle: "metaTitle",
  metaDescription: "metaDescription",
  headStyle: { backgroundColor: "#ececec" },
  bodyStyle: { backgroundColor: "#fff" },
};










