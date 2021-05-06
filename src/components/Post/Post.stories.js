import React from 'react';

import { Post } from './Post';

export default {
  title: 'Example/Post',
  component: Post
  
};

const Template = () => (
    <Post content =" I´m working in Sygma trying to design a new web site" date = "05/05/2021"></Post>
);

export const Default = Template.bind({});



