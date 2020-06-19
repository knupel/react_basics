import React from 'react';
import data from './9_0_data.js';

/**
 * CheckBoxV3
 */
export class CheckBoxV3 extends React.Component {
  constructor() {
    super();
    this.state = {
      item_list: data
    };
    this.update = this.update.bind(this);
  }

  update(id) {
    console.log('update V3');
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
    console.log('renver V3');
    const temp = this.state.item_list.map((item) => (
      <ItemV3 key={item.id} item={item} update={this.update} />
    ));

    // return <div className="list">{temp}</div>;
    return <div>{temp}</div>;
  }
}

function ItemV3(props) {
  const selected_style = {
    fontStyle: 'italic',
    color: 'red',
    textDecoration: 'line-through'
  };
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={props.item.is}
        onChange={() => props.update(props.item.id)}
      />
      <p style={props.item.is ? selected_style : null}>{props.item.text}</p>
    </div>
  );
}
/**
 * CheckBoxV2
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
export class CheckBoxV2 extends React.Component {
  constructor() {
    super();
    this.state = {
      item_list: data
    };
    this.update = this.update.bind(this);
  }

  update(id) {
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
      <ItemV2 key={item.id} item={item} update={this.update} />
    ));

    return <div className="list">{temp}</div>;
  }
}

function ItemV2(props) {
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={props.item.is}
        onChange={() => props.update(props.item.id)}
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
