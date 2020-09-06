import React from "react";
import { JSONInput } from "./json-input/json-input";
import { VisualUI } from "./visual-ui/visual-ui";
import './Help.css'

export class Help extends React.Component {

  state = {
    jsonText: 
`[
  1,
  2,
  {
    "a": 2,
    "b": [true, false, null, 1, 0, "", "0", [], {}]
  }
]`,
    json: [
      1,
      2,
      {
        "a": 2,
        "b": [true, false, null, 1, 0, "", "0", [], {}]
      }
    ],
  };

  handleTextChange(value) {
     // eslint-disable-next-line 
    let s = null;
    try {
      s = JSON.parse(value);
    } catch (e) {
      console.error(e);
    }
    this.setState({
      jsonText: value,
      json: s,
    });
  }

  render (){
    return (
      <div className="help-container">
        <JSONInput
          jsonText={this.state.jsonText}
          onChange={e => this.handleTextChange(e)}/>
        <VisualUI json={this.state.json}></VisualUI>
      </div>
    );
  }

}
