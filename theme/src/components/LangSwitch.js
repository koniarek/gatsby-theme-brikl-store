import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
createStyles({
  select:{
    '&:hover':{
      cursor: 'pointer'
    }
  },
}),
);
const LangSwitch = ({ languages, setLanguage, selectedLanguage }) => {
  console.log(selectedLanguage)
  const classes = useStyles();

  return (
    <div style={{display: 'flex', alignItems:'center'}} className={classes.select}>
    <select
      value={selectedLanguage}
      onChange={e => setLanguage(e.target.value)}
      aria-label="language"
      className={classes.selectApperance}
      style={{
        fontFamily: 'Roboto',
        fontSize: 16,
        paddingRight: 20,
        border: 'none',
        background:'transparent',
     padding: 5,
      }}
    >
      {languages.map((lang, index) => (
        <option value={lang.split("_")[0]} key={index} label={lang.split("_")[0] === 'en' ? 'English' : 'Français'}>
          {lang.split("_")[0]}
        </option>
      ))}
    </select>
    </div>
  )
}

export default LangSwitch
