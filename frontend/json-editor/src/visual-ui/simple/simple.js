import React from "react";

export class Simple extends React.Component {

  render() {
    const value = this.props.value;
    const index = this.props.index;
    return (
      <label>
        <label className="index">{`${index}`}</label>
        <label className="default-black colon">:&nbsp;&nbsp;</label>
        {
          ((typeof value === 'number') && <label style={{ color: '#3366CC' }}>{value}</label>)
            || ((typeof value === 'string') && <label><label className="default-black">"</label><label style={{color: "#CC3333"}}>{value}</label><label className="default-black">"</label></label>)
            || ((typeof value === 'boolean') && <label style={{ color: '#3366CC' }}>{value ? 'true' : 'false'}</label>)
            || (<label style={{ color: 'rgb(141, 141, 141)' }}>null</label>)
        }
      </label>
    );
  }

}
