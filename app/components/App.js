import React from 'react';
import ColourList from './ColourList';
import LanguageList from './LanguageList';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <ColourList/>
        <LanguageList/>
      </div>
    )
  }
}

module.exports = App;
