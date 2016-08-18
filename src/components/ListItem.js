import React, { Component } from 'react';
import moment from 'moment'

export default class ListItem extends Component {
  constructor() {
    super();
  }

  render() {
    let { _id, task, createdAt, isComplete } = this.props;

    return (
      <tr>
        <td>{ task }</td>
        <td>{ moment(createdAt).format('lll') }</td>
        <td>
          <input readOnly type="checkbox" checked={isComplete}/>
        </td>
      </tr>
    )    
  }
}
