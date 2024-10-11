
import React, { useState } from 'react';
import ContentContext from '../context/ContentContext';
import CloudInfrastructure from '../components/content/CloudInfrastructure';


const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(<CloudInfrastructure />)

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
