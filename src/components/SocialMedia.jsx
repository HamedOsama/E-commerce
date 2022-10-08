import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconsContainer from '../UI/Footer/IconsContainer'
import SocialIcon from '../UI/SocialIcon'

const SocialMedia = () => {
  return (
    <IconsContainer>
      <SocialIcon>
        <FacebookRoundedIcon />
      </SocialIcon>
      <SocialIcon>
        <InstagramIcon />
      </SocialIcon>
      <SocialIcon>
        <LinkedInIcon />
      </SocialIcon>
      <SocialIcon>
        <GitHubIcon />
      </SocialIcon>
    </IconsContainer>
  )
}

export default SocialMedia