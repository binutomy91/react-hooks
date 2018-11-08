import React from "react";
import ReactDOM from "react-dom";

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Binu"
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  render() {
    return (
      <div className="main-container">
        <section>
          <input value={this.state.name} onChange={this.handleNameChange} />
        </section>
      </div>
    );
  }
}
