import React from 'react';
import Resume from '../../components/resume';

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Resume/>
    </div>
  );
}

export default Layout;
