import React from 'react';

/**
 * CheckBoxV2
 */
import data from './9_0_data.js';

export class CheckBoxV2 extends React.Component {
  constructor() {
    super();
    this.state = {
      item_list: data
    };
    this.handle_change = this.handle_change.bind(this);
  }

  handle_change(id) {
    this.setState((prevState) => {
      const update = prevState.item_list.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            is: !elem.is
          };
        }
        return elem;
      });
      return {
        item_list: update
      };
    });
  }

  render() {
    const temp = this.state.item_list.map((item) => (
      <Item key={item.id} item={item} handle_change={this.handle_change} />
    ));

    return <div className="todo-list">{temp}</div>;
  }
}

function Item(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.is}
        onChange={() => props.handle_change(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 * CheckBoxV1
 */
export function CheckBoxV1() {
  return (
    <div>
      <main className="list">
        {check_box('stan')}
        {check_box('le')}
        {check_box('punk')}
      </main>
    </div>
  );
}

function check_box(title) {
  return (
    <div className="checkbox">
      <input type="checkbox" />
      <p>{title}</p>
    </div>
  );
}
/**
 *
 *
 *
 *
 *
 *
 *
 *
 * CheckBoxV0
 */
export function CheckBoxV0() {
  return (
    <div>
      <main>
        <input type="checkbox" />
        <p>Stan</p>
        <input type="checkbox" />
        <p>le</p>
        <input type="checkbox" />
        <p>punk</p>
      </main>
    </div>
  );
}
