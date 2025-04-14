'use client'
import Bar from '../../components/NavBar';
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import styles from '../../components/Home.module.css'
import Startproject from '../../components/StartProject';
import Footer from '../../components/Footer'
import Image from 'next/image';
import HeroCarousel from '../../components/heroCarousel'
import { Carousel } from 'react-bootstrap';
import Services from '../../components/services';
import HomeAbout from '../../components/homeAbout';
import GoogleSheetsItems from '../../components/googleSheet'
import AbtStartProject from '../../components/AbtStartProject';
export default function Home() {
  const [moveHeader, setMoveHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setMoveHeader(true); // Move header to the right
      } else {
        setMoveHeader(false); // Reset header to its original position
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <HeroCarousel />

      <HomeAbout />

      <Services />

      <GoogleSheetsItems />
      <AbtStartProject />
    </>
  );
}
