import React from 'react';
import Form from './NewProject/Form';
import Navbar from './NewProject/Navbar';
import PageContent from './NewProject/PageContent';
import {ThemeProvider} from './NewProject/contexts/ThemeContext';
import {LanguageProvider} from './NewProject/contexts/LanguageContext';


function App(){
  return(
    <div>
      <>
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
              <Navbar />
              <Form />
            </PageContent>
          </LanguageProvider>
      </ThemeProvider>
      </>
    </div>
  )
}

export default App;
