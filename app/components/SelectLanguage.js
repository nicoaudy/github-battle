const React = require('react');

const SelectLanguage = ({ selectedLanguage, onSelect }) => {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='languages'>
            {languages.map((lang) => {
                return(
                    <li
                        style={lang === selectedLanguage ? { color: '#d0021b' } : null}
												onClick={() => onSelect(lang)}
                        key={lang}
                    >
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}

module.exports = SelectLanguage;
