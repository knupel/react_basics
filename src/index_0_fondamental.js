// import React from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Basic from './fondamantal/0_basic';
import { Welcome } from './fondamantal/1_welcome';
import { Multi } from './fondamantal/2_multi';
import { Clock } from './fondamantal/3_clock';
import { Tempo } from './fondamantal/4_tempo';
import { Toggle } from './fondamantal/5_event_toggle';
import { ToggleShow } from './fondamantal/6_event_toggle_show';
import { ActionLink } from './fondamantal/7_event_function';
import { ButtonClick } from './fondamantal/8_event_class';
import { Mailbox } from './fondamantal/9_if_without_if';
import { Page } from './fondamantal/10_if_false_return_null';
import { list_items, List } from './fondamantal/11_list';
import { ListKey, ListKeyIDrandom } from './fondamantal/12_list_key';
import { NameForm } from './fondamantal/13_form';
import { DropdownDrink } from './fondamantal/14_form_dropdown';
import { ForJSX } from './fondamantal/15_for_jsx';

const elem_welcome = <Welcome name="Félix" />;
const elem_numbers = [0, 1, -2, 4, -1];

ReactDOM.render(
  <React.StrictMode>
    <ForJSX />
    {/* <DropdownDrink /> */}
    {/* <NameForm /> */}
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
    {/* <Multi />
    <Basic name="Stan" nickname="le Punk" /> */}
    {/* <Clock date={new Date()} /> // this one is for class without constructor*/}
    {/* <Clock /> */}
    <Tempo increment={1} tempo={1} />
  </React.StrictMode>,

  // <Multi />,
  document.getElementById('shook-root')
);

// refresh your page, but it's very raw and not optimize for all
// function draw() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById("shook-root")
//   );
// }

// setInterval(draw, 1000);
