// import React from "react";
import React from 'react';

import '../css/index.css';
import Basic from './0_basic';
import { Welcome } from './1_welcome';
import { Multi } from './2_multi';
import { Clock } from './3_clock';
import { Tempo } from './4_tempo';
import { Toggle } from './5_event_toggle';
import { ToggleShow } from './6_event_toggle_show';
import { ActionLink } from './7_event_function';
import { ButtonClick } from './8_event_class';
import { Mailbox } from './9_if_without_if';
import { Page } from './10_if_false_return_null';
import { list_items, List } from './11_list';
import { ListKey, ListKeyIDrandom } from './12_list_key';
import { NameForm, MultiForm } from './13_0_form';
import { FormAdvanced } from './13_1_form';
import { DropdownDrink } from './13_2_form_dropdown';
import { ForJSX } from './15_for_jsx';
import PureStyle from './16_style';
import { ComponentOrFunction } from './17_component_or_function';
import { State } from './18_state.js';
import { LifeCycle } from './19_life_cycle.js';
import { ConditionalRender } from './20_life_cycle_conditional_render';
import { Fetch } from './21_Fetch';
import { GridSetting } from './22_Grid';

import { HookState, HookStateAndEffect } from './hook/hook_base';
import { HookStateList } from './hook/hook_array_list';

import { PropsBase } from './props/props_base';
import { PropsChildren } from './props/props_children';

const elem_welcome = <Welcome name="Félix" />;
const elem_numbers = [0, 1, -2, 4, -1];

export default function MainFondamental() {
  return (
    <React.StrictMode>
      <HookStateList />
      {/* <HookState /> */}
      {/* <HookStateAndEffect /> */}

      {/* <PropsBase name="Knupel" age={46} /> */}
      {/* <PropsChildren name="Knupel" age={46}>
        {document}
      </PropsChildren> */}

      {/* <GridSetting /> */}
      {/* <Fetch /> */}
      {/* <ConditionalRender /> */}
      {/* <LifeCycle /> */}
      {/* <State step={10} /> */}
      {/* <ComponentOrFunction /> */}
      {/* <PureStyle /> */}
      {/* <ForJSX /> */}
      {/* <DropdownDrink /> */}
      {/* <NameForm /> */}
      {/* <MultiForm /> */}
      {/* <FormAdvanced /> */}
      {/* <ListKey numbers={elem_numbers} /> */}
      {/* <ListKeyIDrandom numbers={elem_numbers} /> */}
      {/* {list_items} */}
      {/* <List numbers={elem_numbers} /> */}
      {/* <Page /> */}
      {/* <ToggleShow /> */}
      {/* <Mailbox unread={["truc", "machin", "bidule"]} /> */}
      {/* <Toggle /> */}
      {/* <ButtonClick /> */}
      {/* <ActionLink /> */}
      {/* {elem_welcome} */}
      {/* <Multi /> */}
      {/*<Basic name="Stan" nickname="le Punk" /> */}
      {/* <Clock date={new Date()} /> // this one is for class without constructor*/}
      {/* <Clock /> */}
      {/* <Tempo increment={1} tempo={1} /> */}
    </React.StrictMode>
  );
}
