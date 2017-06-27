import React from 'react';

class LanguageList extends React.Component {
  render() {
    const languages = ['JavaScript', 'Ruby', 'C', 'Python', 'PHP', 'Go', 'Elm'];

    return (
      <ul className='language-list'>
        {languages.map((lang) => {
          return (
            <li key={lang}>{lang}</li>
          )
        })}
      </ul>
    )
  }
}

export default LanguageList;
