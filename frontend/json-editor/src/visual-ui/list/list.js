import React from "react";
import { chooseComponent, createAddon } from '../visual-ui';

export class List extends React.Component {

  constructor() {
    super();
    this.state = this.state || {};
    this.state.fold = false;
  }

  render() {
    const arr = this.props.value;
    const index = this.props.index;
    const isRoot = (typeof index !== 'string') && (typeof index !== 'number');
    return (
      <ul style={{ paddingLeft: isRoot ? '20px' : '0px', width: '100%' }}>
        <li className="relative">
          <div className={`triangle-toggle ${this.state.fold ? 'fold' : 'unfold'}`}></div>
          {
            !isRoot && <label className="index">{index === undefined ? '' : `${index}`}</label>
          }
          {
            !isRoot && <label className="default-black colon">:&nbsp;&nbsp;</label>
          }
          <label className="default-black">{createAddon(arr)}</label>
        </li>
        <li>
          <ul style={{ paddingLeft: '30px', width: '100%' }}>
            {
              arr.map((item, i) => 
                <li key={i}>{ chooseComponent(item, i) }</li>
              )
            }
          </ul>
        </li>
      </ul>
    );
  }

}