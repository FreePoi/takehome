import React from "react";
import { JSONInput } from "./json-input/json-input";
import { VisualUI } from "./visual-ui/visual-ui";
import './Help.css'

export class Help extends React.Component {

  state = {
    jsonText: 
`[
  2020,
  -1,
  0,
  {
    "a": [true, false, null, 1, 0, "", "0", [], {}],
    "b": 2020,
    "c": true,
    "d": false,
    "e": "hello world",
    "f": null,
    "g": [],
    "h": {}
  },
  true,
  false,
  "hello world",
  null,
  [],
  {}
]`
  };

  handleTextChange(value) {
    this.setState({
      jsonText: value,
    });
  }

  render (){
    return (
      <div className="help-container">
        <JSONInput
          jsonText={this.state.jsonText}
          onChange={e => this.handleTextChange(e)}/>
        <VisualUI jsonText={this.state.jsonText}></VisualUI>
      </div>
    );
  }

}
