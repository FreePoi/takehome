import React from "react";
import './visual-ui.css';

const DataType = {
  ARRAY: 'array',
  MAP: 'map',
  SIMPLE: 'simple',
};

export class VisualUI extends React.Component {

  componentWillReceiveProps(props) {
    console.log(props);
  }

  render() {
    console.log('trigger render, props.json: ', this.props.json);
    if (!this.props.json) {
      return (
        <label></label>
      );
    }
    return <section className="visual-ui">{Create(this.props.json)}</section>;
  }

}
function getDataType(s) {
  if (s instanceof Array) {
    return DataType.ARRAY;
  }
  if (typeof s === 'object' && (s !== null)) {
    return DataType.MAP;
  }
  return DataType.SIMPLE;
}
var key = 1
function Create(data, notFirstLevel) {
  const dataType = getDataType(data);
  console.log(dataType, data);
  switch (dataType) {
    case DataType.ARRAY:
      return (<ul style={{ paddingLeft: notFirstLevel ? '30px' : '0px', width: '100%' }}>
        {data.map(item => <li className="aa" key={key++}>{Create(item, true)}</li>)}
      </ul>);
    case DataType.MAP:
      return (<ul style={{ paddingLeft: notFirstLevel ? '30px' : '0px', width: '100%' }}>
        {Object.keys(data).map(item => <li className="aa" key={key++}><label>{item + ': '}</label>{Create(data[item], true)}</li>)}
      </ul>);
    default:
      return <Simple value={data}/>;
  }
}
function Simple(props) {
  if (typeof props.value === 'number') {
    return <label style={{ color: '#00f' }}>{props.value}</label>;
  }
  if (typeof props.value === 'string') {
    return <label style={{color: "red"}}>{`"${props.value}"`}</label>;
  }
  if (typeof props.value === 'boolean') {
    return <label style={{color: "#00f"}}>{props.value ? 'true' : 'false'}</label>;
  }
  return <label style={{color: "gray"}}>null</label>;
}
// function NumberLine(num) {
//   return <label style="color: #00f!important">{num}</label>;
// }
// function StringLine(string) {
//   return <label style="color: red!important">{string}</label>;
// }
// function BooleanLine(boolean) {
//   return <label style="color: #00f!important">{boolean}</label>;
// }
// function NullLine() {
//   return <label style="color: gray!important">null</label>;
// }
// eslint-disable-next-line
[
  1,
  2,
  {
    "a": 2,
    "b": [true, false, null, 1, 0, "", "0", [], {}]
  }
]