import React from 'react';
import ReactDOM from 'react-dom';
import Scrimba from './scrimba/0_main';
import ScrimbaBootcamp from './scrimba_bootcamp/0_main';
import ScrimbaBootcampReusable from './scrimba_bootcamp_reusable/main';
import ScrimbaTips from './scrimba_tips/0_main';
import Fondamental from './fondamental/0__main_fondamental';
import MiniProject from './mini_project/0_main_mini_project';

ReactDOM.render(
  <React.StrictMode>
    <ScrimbaBootcampReusable />
    {/* <MiniProject /> */}
    {/* <ScrimbaTips /> */}
    {/* <ScrimbaBootcamp /> */}
    {/* <Scrimba /> */}
    {/* <Fondamental /> */}
  </React.StrictMode>,
  document.getElementById('shook-root')
);

// setInterval(draw, 1000);
