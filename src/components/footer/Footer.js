import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='ftContainer'>
        <div className='ftBlock'>
            <div className='ftHeader'>COINCAP.IO</div>
            <div>Methodology</div>
            <div>Support</div>
            <div>Our API</div>
            <div>Rate Comparison</div>
            <div>Careers</div>
        </div>
        <div className='ftBlock'>
            <div className='ftHeader'>LEGALS</div>
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
        </div>
        <div className='ftBlock'>
            <div className='ftHeader '>FOLLOW US</div>
            <div className='ftMedia'>
                <div><TwitterIcon /></div>
                <div><InstagramIcon /></div>
                <div><FacebookIcon /></div>
            </div>
        </div>
        <div className='ftBlock'>
            <div className='ftHeader'>COINCAP APP AVAILABLE ON</div>
            <div>Google Play</div>
            <div>App Store</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
