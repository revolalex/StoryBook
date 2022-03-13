import React from 'react';
import MyRow from './MyRow.tsx';
import { Default as MyGraphicCard } from '../Card/MyGraphicCard.stories.js';

export default {
    component: MyRow,
    title: 'MyRow',
};

const Template = args => <MyRow {...args} />;

const url ='https://cdn.futura-sciences.com/buildsv6/images/wide1920/f/d/1/fd100bc73e_50147633_plane-te-technologie.jpg'
MyGraphicCard.args.imgUrl=url

export const With1Element = Template.bind({});
With1Element.args = {
    numberOfElement: 1,
    children1: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%", margin:"auto"}}  />,
};

export const With2Element = Template.bind({});
With2Element.args = {
    numberOfElement: 2,
    children1: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%"}}  />,
    children2: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%"}}  />,

};
export const With3Element = Template.bind({});
With3Element.args = {
    numberOfElement: 3,
    children1: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%", margin:"auto"}}  />,
    children2: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%", margin:"auto"}}  />,
    children3: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%", margin:"auto"}}  />,

};

export const With4Element = Template.bind({});
With4Element.args = {
    numberOfElement: 4,
    children1: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%", margin:"auto"}}  />,
    children2: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%", margin:"auto"}}  />,
    children3: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%", margin:"auto"}}  />,
    children4: <MyGraphicCard {...MyGraphicCard.args} style={{width:"90%", margin:"auto"}}  />,
};




