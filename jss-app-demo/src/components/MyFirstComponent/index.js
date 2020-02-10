import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MyFirstComponent = (props) => (
  <div>
    <Text field={props.fields.heading} /> <br /> 
    <Text field={props.fields.headingdescription} />
  </div>
);

export default MyFirstComponent;
