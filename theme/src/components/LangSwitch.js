import React from "react"

const LangSwitch = ({ languages, setLanguage, selectedLanguage }) => {
  console.log(selectedLanguage)
  return (
    <select
      value={selectedLanguage}
      onChange={e => setLanguage(e.target.value)}
      aria-label="language"
    >
      {languages.map((lang, index) => (
        <option value={lang.split("_")[0]} key={index}>
          {lang.split("_")[0]}
        </option>
      ))}
    </select>
  )
}

export default LangSwitch
