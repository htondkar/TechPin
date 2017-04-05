import React, {PropTypes} from 'react';

import AppleStoreLogo from '../../static/App-Store-Badge.svg'
import GoogleStoreLogo from '../../../images/google-play-badge.png'
import LinkedLogo from '../../../images/linkedin.png'
import InstagramLogo from '../../../images/instagram.png'

const SocialNetworks = ({socialData}) => {
  return (
       <div className="single-link">
              <a href={socialData.ios || ''} target="_blank" className={socialData.io ? '' : 'social-disabled'}>
                <img src={AppleStoreLogo} alt=""/>
              </a>
              <a href={socialData.android || ''} target="_blank" className={socialData.android ? '' : 'social-disabled'}>
                <img src={GoogleStoreLogo} alt=""/>
              </a>
              <a href={socialData.linkedin || ''} target="_blank" className={socialData.linkedin ? '' : 'social-disabled'}>
                <img id='linkedin' src={LinkedLogo} alt=""/>
              </a>
              <a href={socialData.instagram || ''} target="_blank" className={socialData.instagram ? '' : 'social-disabled'}>
                <img id='instagram' src={InstagramLogo} alt=""/>
              </a>
              <div className='divider'></div>
            </div>
    );
}


export default SocialNetworks