import React from "react";

function WarningBanner(props) {
  if (!props.warning_is) {
    // display nothing
    return null;
    // stop the behavior
    // return;
  }
  return (
    <div className="warning">
      <h2>Attention !</h2>
    </div>
  );
}

export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show_warning: true };
    this.handle_click = this.handle_click.bind(this);
  }

  handle_click() {
    this.setState((state) => ({
      show_warning: !state.show_warning,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handle_click}>
          {this.state.show_warning ? "Hide" : "Show"}
        </button>
        <WarningBanner warning_is={this.state.show_warning} />{" "}
      </div>
    );
  }
}
