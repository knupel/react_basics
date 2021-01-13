import React from 'react';

import { Frag } from './2_fragment';
import { Feature } from './1_new_concept_js';
import { PropsDefault } from './3_props_default';
import { PropsTypeDefault } from './4_proptypes';
import { Child } from './5_children';
import Hoc0 from './6_0_higher_order_component';
import Hoc1 from './6_1_higher_order_component';
import Hoc2 from './6_2_higher_order_component';
import '../css/scrimba.css';

export default function Main() {
  return (
    <React.StrictMode>
      <Hoc2 />
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
