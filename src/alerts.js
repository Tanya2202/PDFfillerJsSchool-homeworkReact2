import React from "react";

export default class Alerts extends React.Component {
  render() {
    const alertsArray = this.props.alerts;

    console.log("Alerts", alertsArray);
    if (!alertsArray) return "";

    return (
      <>
        {alertsArray.map((alert, index) => (
          <div key={index}>{alert}</div>
        ))}
      </>
    );
  }
}
