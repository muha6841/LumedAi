import Link from 'next/link';
import React from 'react';

interface IFooter {
    footerLogo: string,
    copyRight: string,
    className?: string,
}

const Footer: React.FC <IFooter> = (
    {
        footerLogo,
        copyRight,
        className,
    }
) => {
  return (
    <div className={`footer ${className}`}>
        <div className='container'>
            <div className='logo-area'>
                <strong className='footer-logo'>
                    <Link href="#"><img src={footerLogo} alt="footerLogo" /></Link>
                </strong>
                <p>{copyRight}</p>
            </div>
            <ul className='footer-menu'>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;