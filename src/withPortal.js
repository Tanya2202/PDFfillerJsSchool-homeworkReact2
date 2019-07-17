import ReactDOM from "react-dom";

export default function withPortal(Component) {
  return function(domElem) {
    return ReactDOM.createPortal(Component, domElem);
  };
}
