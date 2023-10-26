import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Header = () => {
const router = useRouter()
  const [mobileMenu, setMobileMenu] = useState(false);

  const NavMenu = [
    { menu: 'Home', link: "/" },
    { menu: 'About Us', link: "/about" },
    { menu: 'Careers', link: "/" }
  ];

  return (
    <div className='header'>
      <div className='container'>
        <strong className='logo'>
          <Link href="#"><img src="assets/images/logo.png" alt="logo" /></Link>
        </strong>
        <div className={mobileMenu ? 'menu-area mobile-menu' : 'menu-area'}>
          <ul className="menu">
            {NavMenu.map((data) => (
              <li key={data.menu}>
                <Link
                  href={data.link}
                >
                  {data.menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className='signIn-btn'>
            <Button btntext="Sign In" onClick={() => router.push('/SignInForm')} />
          </div>
        </div>
      </div>
      <div className='harmburger-menu' onClick={() => setMobileMenu(!mobileMenu)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  )
}

export default Header;