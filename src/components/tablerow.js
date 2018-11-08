import React, { Component } from 'react';


class Tablerow extends Component {

  render() {
        
    return (
        <tr>
            <td> {this.props.data.name} </td>
            <td> {this.props.data.age} </td>
            <td> {this.props.data.sal} </td>
        </tr>
    );
  }
}

export default Tablerow;
