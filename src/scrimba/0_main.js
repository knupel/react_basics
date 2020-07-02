import React from 'react';
import { Header } from './1_header';
import { NavBar } from './2_nav';
import Content from './3_0_content';
import { Footer } from './4_footer';
import { Site0 } from './10_site_0';
import '../css/scrimba.css';

export default function Main() {
  return (
    <React.StrictMode>
      {/* <Header />
      <NavBar />
      <Content />
      <Footer /> */}
      <Site0 />
    </React.StrictMode>
  );
}
