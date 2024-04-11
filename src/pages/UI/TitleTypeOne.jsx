import React from 'react'
import './title.css'

import victor from '../../Components/assets/victor.png'

export const TitleTypeOne = ({ClassName,Title,TitleTop}) => {
  return (
    <div className={`titleTypeOne${ClassName}`}>
        <small>{TitleTop}</small>
<div className="heading-H">
<div className="line"></div>
<h2>{Title}</h2>
<div className="line"></div>

</div>
<img src={victor} alt='victor'/>
    </div>
  )
}
