// import React from "react";
import React from 'react';

import '../css/index.css';

import { PropsBase } from './props/props_base';
import { PropsChildren } from './props/props_children';
import Props3 from './props/pass_elem_to_props_value';

import Basic from './misc/0_basic';
import { Welcome } from './misc/1_welcome';
import { Multi } from './misc/2_multi';
import { Clock } from './misc/3_clock';
import { Tempo } from './/misc/4_tempo';
import { ForJSX } from './misc/15_for_jsx';
import PureStyle from './misc/16_style';
import { ComponentOrFunction } from './misc/17_component_or_function';
import { State } from './misc/18_state.js';
import { Fetch } from './misc/21_Fetch';
import { GridSetting } from './misc/22_Grid';
import Exp from './misc/23_array_or_object_export';

import { Toggle } from './event/5_event_toggle';
import { ToggleShow } from './event/6_event_toggle_show';
import { ActionLink } from './event/7_event_function';
import { ButtonClick } from './event/8_event_class';

import { Mailbox } from './if/9_if_without_if';
import { Page } from './if/10_if_false_return_null';

import { list_items, List } from './list/11_list';
import { ListKey, ListKeyIDrandom } from './list/12_list_key';

import { NameForm, MultiForm } from './form/13_0_form';
import { FormAdvanced } from './form/13_1_form';
import { DropdownDrink } from './form/13_2_form_dropdown';

import { LifeCycle } from './life_cycle/19_life_cycle.js';
import { ConditionalRender } from './life_cycle/20_life_cycle_conditional_render';

import { Mother } from './hook/hook_context';
import { StateContext } from './hook/hook_context_useState';
import { HookState, HookStateAndEffect } from './hook/hook_base';
import { HookStateList_1 } from './hook/hook_array_list_1';
import { HookStateList_2 } from './hook/hook_array_list_2';
import Hooks3 from './hook/custom_hook_with_ref';

const elem_welcome = <Welcome name="Félix" />;
const elem_numbers = [0, 1, -2, 4, -1];

export default function MainFondamental() {
  return (
    <React.StrictMode>
      <Hooks3 />
      {/* <Props3 /> */}
      {/* <Exp /> */}
      {/* <StateContext /> */}
      {/* <Mother /> */}
      {/* <HookStateList_2 /> */}
      {/* <HookStateList_1 /> */}
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
