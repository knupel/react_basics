import React from "react";

/**
 * write experimental is activate by default in React
 * transform-class-properties
 */
export default class ButtonClick extends React.Component {
  // this syntaxe give the insurance of `this` is linked to handleClick.
  // handleClick = () => {    console.log('this vaut :', this);  }
  render() {
    return (
      <button onClick={this.handle_click}>
        click of internationale class{" what"}
      </button>
    );
  }
}

/**
 * classic writing
 * can give a trouble if the method is pass like a props in other elements...is not really optimized
 */
/*
export default class ButtonClick extends React.Component {
  handleClick() {
    console.log('this vaut :', this);
  }

  render() {
    // Cette syntaxe nous assure que `this` est bien lié dans la méthode handleClick    return (      <button onClick={() => this.handleClick()}>        Clique ici
      </button>
    );
  }
}
*/
