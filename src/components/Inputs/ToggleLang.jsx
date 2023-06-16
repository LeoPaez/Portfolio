import React from 'react'
import { useTranslation } from "react-i18next"
import "./ToggleButton.css"

const ToggleLang = () => {
	const [t, i18n] = useTranslation("global")
  const handleChange = (e) => {
    if(e.target.checked) {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("es")
    }
  }

  return (
		<div className="cont">
			<div className="switch">
				<input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" onChange={handleChange} />
				<label htmlFor="language-toggle"></label>
				<span className="on">ES</span>
				<span className="off">EN</span>
  		</div>
		</div>
  )
}

export default ToggleLang;