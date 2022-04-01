import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import ligth from './styles/themes/ligth';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState(ligth);

  useEffect(()=>{
    setTheme(JSON.parse(localStorage.getItem('theme') || {}))
  },[])

  function toggleTheme() {
    if (theme.title ==='ligth'){
      localStorage.setItem('theme', JSON.stringify(dark))
      setTheme(dark)
    }else{
      localStorage.setItem('theme', JSON.stringify(ligth))
      setTheme(ligth)
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
