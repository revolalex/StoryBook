import React from 'react';


import App from './App.tsx';


export default {
  component: App,
  title: 'App',
  // use to render the component in a container
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <App {...args}  />;


export const Default = Template.bind({});
Default.args = {

};





