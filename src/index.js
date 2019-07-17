import React from "react";
import ReactDOM from "react-dom";

import withPortal from "./withPortal";
import Alerts from "./alerts";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focus();
  }

  state = {
    disabledButton: true,
    inputValue: "",
    history: [],
    portal: ""
  };

  inputHandler = e => {
    const value = e.target.value;

    if (value === "") {
      this.setState({ disabledButton: true, inputValue: value });
    } else {
      this.setState({ disabledButton: false, inputValue: value });
    }
  };

  clickHandler(e) {
    e.preventDefault();
    const value = this.state.inputValue;
    const lasthistory = this.state.history;
    lasthistory.push(value);

    const alertsComponent = <Alerts alerts={lasthistory} />;
    const portal = withPortal(alertsComponent)(
      document.getElementById("alertsList")
    );

    this.setState({
      history: lasthistory,
      inputValue: "",
      disabledButton: true,
      portal
    });
    this.textInput.current.focus();
  }

  render() {
    return (
      <>
        {this.state.portal}
        <div className="App">
          <h1>Alerts App</h1>
          <input
            type="text"
            ref={this.textInput}
            onChange={this.inputHandler}
            value={this.state.inputValue}
          />

          <button
            disabled={this.state.disabledButton}
            onClick={this.clickHandler.bind(this)}
          >
            Add alert
          </button>
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//value  disabled onClick={this.focus} disabled={!this.textInput.value}
