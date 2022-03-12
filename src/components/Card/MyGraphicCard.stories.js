import React from 'react';
import '../../App.css';

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

const Template = args => <MyGraphicCard {...args}  />;


export const Default = Template.bind({});
Default.args = {
    title:"Title",
    displayMeta:true,
    metaTitle:"metaTitle",
    metaDescription:"metaDescription",
    bordered:true,
    hoverable:true,
    loading:false,
    headStyle:{backgroundColor: "#ececec"},
    bodyStyle:  {backgroundColor: "#fff"},
};

// export const Default = Template.bind({});
// Default.args = {
//     title:"Title",
//     displayMeta:true,
//     metaTitle:"metaTitle",
//     metaDescription:"metaDescription",
//     bordered:true,
//     hoverable:true,
//     loading:false,
//     headStyle:{backgroundColor: "#ececec"},
//     bodyStyle:  {backgroundColor: "#fff"},
// };




