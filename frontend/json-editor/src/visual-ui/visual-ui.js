import React from "react";
import './visual-ui.css';
import { Simple } from './simple/simple';
import { List } from './list/list';
import { Mapp } from './map/map';

export const DataType = {
  ARRAY: 'array',
  MAP: 'map',
  SIMPLE: 'simple',
}; 

export class VisualUI extends React.Component {

  render()   {
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
    const dataType = getDataType(data);
    if (dataType === DataType.ARRAY) {
      return <section className="visual-ui"><List value={data} key={undefined}/></section>;
    }
    if (dataType === DataType.MAP) {
      return <section className="visual-ui"><Mapp value={data} key={undefined}/></section>;
    }
    return <section className="visual-ui"><Simple value={data} /></section>;
  }

}

export function getDataType(s) {
  if (s instanceof Array) {
    return DataType.ARRAY;
  }
  if (typeof s === 'object' && (s !== null)) {
    return DataType.MAP;
  }
  return DataType.SIMPLE;
}

export function createAddon(item) {
  const dataType = getDataType(item);
  if (dataType === DataType.ARRAY) {
    return `(${item.length}) [ ]`;
  }
  if (dataType === DataType.MAP) {
    return `(${Object.keys(item).length}) { }`;
  }
  return '';
}


export function chooseComponent(value, index) {
  const dataType = getDataType(value);
  if (dataType === DataType.SIMPLE) {
    return <Simple value={value} index={index}/>
  }
  if (dataType === DataType.ARRAY) {
    return <List value={value} index={index}/>
  }
  if (dataType === DataType.MAP) {
    return <Mapp value={value} index={index}/>
  }
}
// eslint-disable-next-line
[
  1,
  2,
  {
    "a": 2,
    "b": [true, false, null, 1, 0, "", "0", [], {}]
  }
]