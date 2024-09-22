import React from 'react'
import SocialMediaIcon from './SocialMediaIcon'

function Body() {
  return (
    <div className='body'>
      <div className='Social-media-icon-container'>
        {
            SocialMediaIcon.map(item => <span className='Social-media-icon' style={item.style}
            >{item.name}</span>)
        }
      </div>
      <div className='body-content'></div>
    </div>
  )
}

export default Body
