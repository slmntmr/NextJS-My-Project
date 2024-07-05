import React from 'react';
import Resume from '../../components/resume';

const ResumePage = () => {
  return (
    <Resume
      Name="John"
      LastName="Doe"
      Age={30}
      Description="A passionate developer"
      Jop="Software Engineer"
      AplicationLang="JavaScript, Python, C#"
    />
  );
}

export default ResumePage;
