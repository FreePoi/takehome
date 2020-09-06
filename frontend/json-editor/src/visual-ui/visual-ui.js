import React from "react";
import './visual-ui.css';

const DataType = {
  ARRAY: 'array',
  MAP: 'map',
  SIMPLE: 'simple',
};
var key = 1

export class VisualUI extends React.Component {

  componentWillReceiveProps(props) {
  }

  render() {
    const jsonText = this.props.jsonText;
    console.log('trigger render, props.jsonText: ', jsonText);
    if (jsonText === '') {
      return <section className="visual-ui"></section>;
    }
    let data;
    try {
      data = JSON.parse(this.props.jsonText);
    } catch (e) {
      return <section className="visual-ui">{e.toString()}</section>;
    }
    return <section className="visual-ui">{Create(data, true)}</section>;
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

function Create(data, isFirstLevel) {
  const dataType = getDataType(data);
  switch (dataType) {
    case DataType.ARRAY:
      return isFirstLevel
        ? (<ul style={{ paddingLeft: isFirstLevel ? '0px' : '30px', width: '100%' }}>
          <li>
            <div className="triangle-toggle fold"></div>
            <label className="default-black">{createAddon(data)}</label>
          </li>
          <li>
            {CreateArray(data)}
          </li>
        </ul>)
        : CreateArray(data);
    case DataType.MAP:
      return isFirstLevel
        ? (<ul style={{ paddingLeft: isFirstLevel ? '0px' : '30px', width: '100%' }}>
            <li><label className="default-black">{createAddon(data)}</label></li>
            <li>
              {CreateMap(data)}
            </li>
          </ul>)
        : CreateMap(data);
    default:
      return <Simple value={data}/>;
  }
}

function CreateArray(data) {
  return (
    <ul style={{ paddingLeft: '30px', width: '100%' }}>
      {
        data.map((item, index) =>
          <li key={key++}>
            <label className="index">{`${index}`}</label>
            <label className="default-black colon">:&nbsp;&nbsp;</label>
            <label className="default-black">{createAddon(item)}</label>
            {Create(item)}
          </li>
        )
      }
    </ul>
  );
}

function CreateMap(data) {
  return (
    <ul style={{ paddingLeft: '30px', width: '100%' }}>
      {
        Object.keys(data).map(item =>
          <li key={key++}>
            <label className="index">{`${item}`}</label>
            <label className="default-black colon">:&nbsp;&nbsp;</label>
            <label className="default-black">{createAddon(data[item])}</label>
            {Create(data[item])}
          </li>
        )
      }
    </ul>
  );
}

function createAddon(item) {
  const dataType = getDataType(item);
  if (dataType === DataType.ARRAY) {
    return `(${item.length}) [ ]`;
  }
  if (dataType === DataType.MAP) {
    return `(${Object.keys(item).length}) { }`;
  }
  return '';
}

function Simple(props) {
  if (typeof props.value === 'number') {
    return <label style={{ color: 'rgb(106, 88, 224)' }}>{props.value}</label>;
  }
  if (typeof props.value === 'string') {
    return <label><label className="default-black">"</label><label style={{color: "red"}}>{props.value}</label><label className="default-black">"</label></label>;
  }
  if (typeof props.value === 'boolean') {
    return <label style={{ color: 'rgb(106, 88, 224)' }}>{props.value ? 'true' : 'false'}</label>;
  }
  return <label style={{ color: 'rgb(141, 141, 141)' }}>null</label>;
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