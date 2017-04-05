import React, {PropTypes} from 'react';

import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import FileCloud from 'material-ui/svg-icons/file/cloud';

const styles = {
    svgIcon: {
        width: '20px', 
        color:'#0D47A1'
    },
}

const ContactInfo = ({contactData}) => {
  return (
      <div className="">
        <div className='contact-info-row'>
          <FileCloud style={styles.svgIcon} />
          <span className="contact-info-title">website</span>
          {ContactInfo.website || ''}
        </div>
        <div className='contact-info-row'>
          <FileCloud style={styles.svgIcon} />
          <span className="contact-info-title">extra url</span>
          {contactData.extraUrl || ''}
        </div>
        <div className='contact-info-row'>
          <CommunicationEmail style={styles.svgIcon} />  
          <span className="contact-info-title">email</span>
          {contactData.email || ''}
        </div>
      </div>
    );
}


export default ContactInfo