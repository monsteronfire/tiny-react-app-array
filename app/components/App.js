import React from 'react';
import ColourList from './ColourList';
import LanguageList from './LanguageList';
import AnimalList from './AnimalList';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <ColourList/>
        <LanguageList/>
        <AnimalList/>
      </div>
    )
  }
}

export default App;
