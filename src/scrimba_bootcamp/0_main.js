import React from 'react';

import { Frag } from './2_fragment';
import { Feature } from './1_new_concept_js';
import { PropsDefault } from './3_props_default';
import { PropsTypeDefault } from './4_proptypes';
import { Child } from './5_children';
import Hoc0 from './6_0_higher_order_component';
import Hoc1 from './6_1_higher_order_component';
import Hoc2 from './6_2_higher_order_component';
import Props0 from './7_0_props_func';
import Props1 from './7_1_props_func';
import Props2 from './7_2_props_func';
import Props3 from './7_3_props_func_datafetching';
import Update0 from './8_0_update_comp';
import Update1 from './8_1_update_comp';
import Update2 from './8_2_update_comp';
import Context0 from './9_0_context/9_0_context';
import Context1 from './9_1_context/9_1_context';
import Context2 from './9_2_context/9_2_context';
import Context3 from './9_3_context/9_3_context';
import '../css/scrimba.css';

export default function Main() {
  return (
    <React.StrictMode>
      <Context3 />
      {/* <Context2 /> */}
      {/* <Context1 /> */}
      {/* <Context0 /> */}
      {/* <Update2 /> */}
      {/* <Update1 /> */}
      {/* <Update0 /> */}
      {/* <Props3 /> */}
      {/* <Props2 /> */}
      {/* <Props1 /> */}
      {/* <Props0 /> */}
      {/* <Hoc2 /> */}
      {/* <Hoc1 /> */}
      {/* <Hoc0 name="ok" /> */}
      {/* <Child /> */}
      {/* <PropsTypeDefault /> */}
      {/* <PropsTypeDefault /> */}
      {/* <PropsDefault /> */}
      {/* <Frag /> */}
      {/* <Feature /> */}
    </React.StrictMode>
  );
}
