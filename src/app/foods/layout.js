import React from 'react';
import Menü from '../../components/menü/menü';

const Layout = ({ children }) => {
  return (
    <div>
      <div>Layout</div>
      <Menü/>
      {children}
    </div>
  );
};

export default Layout;
