import React from 'react';
import { NavBar } from './2_nav';
import { CheckBoxV0, CheckBoxV1 } from './3_main_content';
import { Footer } from './4_footer';
import '../css/scrimba.css';

export default function Main() {
  return (
    <React.StrictMode>
      <NavBar />
      {/* <CheckBoxV0 /> */}
      <CheckBoxV1 />
      <Footer />
    </React.StrictMode>
  );
}
