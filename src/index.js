import React from 'react';
import ReactDOM from 'react-dom';
import Scrimba from './scrimba/0_main';
import ScrimbaBootcamp from './scrimba_bootcamp/0_main';
import ScrimbaTips from './scrimba_tips/0_main';
import Fondamental from './fondamental/0__main_fondamental';

ReactDOM.render(
  <React.StrictMode>
    {/* <ScrimbaTips /> */}
    <ScrimbaBootcamp />
    {/* <Scrimba /> */}
    {/* <Fondamental /> */}
  </React.StrictMode>,
  document.getElementById('shook-root')
);

// setInterval(draw, 1000);
