import React, { Component } from "react";
// import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form id="new-ingredient">
          <input htmlFor="new-ingredient" type="text" />
        </form>
      </div>
    );
  }
}

export default Form;
