'use client'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';
import styles from './navBar.module.css';
const Bar = () => {
  const router = useRouter();


  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Assuming you're using Next.js

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this threshold based on your hero section height
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const closeNavbar = () => {
    setExpanded(false);
  };
  // Function to close the navbar

  return (
    <Navbar
      className={`${styles.customNavbar} ${scrolled ? 'bg-white' : 'bg-transparent'} py-0 py-sm-3 px-0 px-sm-5`}
      expand="lg"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#home" className={`${styles.navbarBrand} ${scrolled ? 'text-white' : 'text-black'}`}>
          <div className={styles.logoContainer}>
            <Image
              src={scrolled ? '/Images/shapadlogoblack.png' : '/Images/shapadlogowhite.png'}
              alt='shapad-logo'
              width={100}
              height={100}
              className={styles.logoImage}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="bi bi-list" style={{ color: scrolled ? 'black' : 'white', fontSize: '1.5rem' }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className='right-aligned-navbar'>
          <div className={`${styles.closeButtonContainer} d-md-none d-block`}>
            <button onClick={closeNavbar} className={styles.closeButton}>
              <i className="bi bi-x" style={{ fontSize: '1.8rem' }}></i>
            </button>
          </div>

          <Nav className='ms-auto'>
            <Nav.Link
              href="/"
              passHref
              className={`${scrolled ? 'text-black' : 'text-white'} pt-0 pt-sm-2 ${styles.navLink} ${pathname === '/' ? 'active' : ''}`}
            >
              <span className="d-block">Home</span>
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={`${styles.links} mx-0 mx-sm-5 pt-0 pt-sm-2 ${scrolled ? 'text-black' : 'text-white'} ${pathname === '/about' ? 'active' : ''}`}
            >
              <span className="d-block">About</span>
            </Nav.Link>
            {/* Rest of your Nav.Links with the same pattern */}
            <Nav.Link
              href="/portfolio"
              className={`${styles.links} mx-0 me-sm-5 pt-0 pt-sm-2 ${scrolled ? 'text-black' : 'text-white'} ${pathname === '/portfolio' ? 'active' : ''}`}
            >
              <span className="d-block">Portfolio</span>
            </Nav.Link>


            <a href="https://forms.gle/rreGvfcvCwTgcwx17"
              target="_blank"
              rel="noopener noreferrer"
              className={`pt-0 pt-sm-2 me-0 me-sm-3 py-3 py-sm-0 ${scrolled ? 'text-black' : 'text-white'} position-relative ${pathname === '/join-us' ? 'active' : ''}`}
            >
              <span className="d-block">Join Us</span>
              <span className={`${styles.customUnderline} position-absolute bottom-0 start-0 w-0 bg-orange h-1 opacity-0 transition duration-300`}></span>
            </a>

            <Nav.Link
              href="/start-a-project"
              className={`${styles.links} mx-0 mx-sm-5 pt-0 pt-sm-2 ${scrolled ? 'text-black' : 'text-white'} ${pathname === '/start-a-project' ? 'active' : ''}`}
            >
              <span className="d-block">Start a project?</span>
            </Nav.Link>
          </Nav>
          <div className=''>
            <a
              className={`main-header text-decoration-none d-block d-md-none ${scrolled ? 'text-black' : 'text-white'}`}
              style={{ fontFamily: 'poppins', fontWeight: '400', marginTop: '10rem', fontSize: '20px' }}
              href="mailto:example@example.com?subject=Hello&body=I wanted to reach out to you about..."
            >
              info@shapad.com.ng
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}
export default Bar;
