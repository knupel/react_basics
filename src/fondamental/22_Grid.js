import React from 'react';
/**
 * template code to create Grid
 * 2020-2020
 * */

let data_board = [];

function set_grid(width, height) {
  // write header
  let count = 0;
  let header = [Number(width), Number(height)];
  data_board.push(header);
  // write content
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      count++;
      let cell = {
        id: count,
        is: true
      };
      data_board.push(cell);
    }
  }
  return;
}

function line(start, stop) {
  const line = data_board.slice(start, stop + 1);
  const list = line.map((elem) => (
    <Cell key={elem.id} id={elem.id} show={elem.is} />
  ));
  return list;
}

function grid() {
  // get the header information
  let w = data_board[0][0];
  let h = data_board[0][1];

  let grid = [];
  // read the line
  for (let index = 0; index < h; index++) {
    let entry = index * w + 1;
    let exit = entry + w - 1;
    grid.push(<div>{line(entry, exit)}</div>);
  }
  return grid;
}

function show_grid() {
  return <div>{grid()};</div>;
}

// SIMPLE ELEMENTS
export function Cell(props) {
  return <button className="cell">{props.show ? 'SHOW' : 'HIDEN'}</button>;
}

// CLASS
export class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // sett if there is none
    if (data_board[0] === undefined) {
      set_grid(this.props.width, this.props.height);
    }
    // show result
    return <div>{show_grid()}</div>;
  }
}

class Grid extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <p>
          {this.props.name} width: {this.props.width} height:{' '}
          {this.props.height}
        </p>
        <Board
          name={this.props.name}
          width={this.props.width}
          height={this.props.height}
        />
      </div>
    );
  }
}

export function GridSetting() {
  return (
    <div>
      <Grid name="SUPA GRID" width="10" height="5" />
    </div>
  );
}
