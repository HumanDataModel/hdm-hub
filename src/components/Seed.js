import React, { Component } from 'react'

export default class Seed extends Component {
   render() {
      return (
         <li>
            {this.props.identity}
         </li>
      )
   }
}
