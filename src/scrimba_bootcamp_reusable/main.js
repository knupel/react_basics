// import React from "react";
import React from 'react';

import '../css/index.css';

import Basic0 from './basic/basic_0';
import Basic1 from './basic/basic_1_children';
import Basic2 from './basic/basic_2_props';
import Basic3 from './basic/basic_3_badge';

import Ref0 from './ref/ref_0_input_control_uncontrol_value';
import Ref1 from './ref/ref_1_input_control_uncontrol_value';
import Ref2 from './ref/ref_2_how_useState_work';
import Ref3 from './ref/ref_3_useRef';
import Ref4 from './ref/ref_4_useEffect';
import Ref5 from './ref/ref_5_forwardRef';
import Ref6Exo from './ref/ref_6_exo_login_signup';

import Reducer0 from './reducer/reducer_0';
import Reducer1 from './reducer/reducer_1';
import Reducer2 from './reducer/reducer_2_customHook';

export default function MainFondamental() {
  return (
    <React.StrictMode>
      <div>Let's Boogie say Cassidy William to starts</div>
      <Reducer2 />
      {/* <Reducer1 /> */}
      {/* <Reducer0 /> */}
      {/* <Ref6Exo /> */}
      {/* <Ref5 /> */}
      {/* <Ref4 /> */}
      {/* <Ref3 /> */}
      {/* <Ref2 />  */}
      {/* <Ref1 /> */}
      {/* <Ref0 /> */}
      {/* <Basic3 /> */}
      {/* <Basic2 /> */}
      {/* <Basic1 /> */}
      {/* <Basic0 /> */}
    </React.StrictMode>
  );
}
