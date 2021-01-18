import React from 'react';
import { Header } from './1_header';
import { NavBar } from './2_nav';
import Content from './3_0_content';
import { Footer } from './4_footer';
import { Site0 } from './10_site_0';
import Forme0 from './5_0_forme';
import { Site1 } from './10_site_1';
import '../css/scrimba.css';

export default function Main() {
  return (
    <React.StrictMode>
      <Forme0 />
      {/* <Site1 /> */}
      {/* <Header />
      <NavBar />
      <Content />
      <Footer /> */}
      {/* <Site0 /> */}
    </React.StrictMode>
  );
}
