import React from "react";
import './json-input.css';

export class JSONInput extends React.Component {

  supportTab (e) {
    if(e.keyCode === 9){
        e.preventDefault();
        var indent = '    ';
        var start = e.target.selectionStart;
        var end = e.target.selectionEnd;
        var selected = window.getSelection().toString();
        selected = indent + selected.replace(/\n/g,'\n'+indent);
        e.target.value = e.target.value.substring(0,start) + selected + e.target.value.substring(end);
        e.target.setSelectionRange(start+indent.length,start+selected.length);
    }
  }

  render() {
    return (
      <section className="JSON-input">
        <textarea onChange={e => this.props.onChange(e.target.value)} value={this.props.jsonText} onKeyDown={this.supportTab}></textarea>
      </section>
    );
  }

}