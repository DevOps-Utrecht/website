import React from 'react';
import Styled from 'styled-components';

const Layout = ({ children, data }) => (
  <div>
    {children()}
  </div>
);


export default Layout;