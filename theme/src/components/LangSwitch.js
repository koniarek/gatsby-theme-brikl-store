import React from "react"

const LangSwitch = ({ languages, setLang }) => {
  return (
    <select>
      {languages.map((lang, index) => (
        <option onChange={() => setLang(lang)} key={index}>
          {lang.split("_")[0]}
        </option>
      ))}
    </select>
  )
}

export default LangSwitch
