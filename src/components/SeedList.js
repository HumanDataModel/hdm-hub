import React, { Component } from 'react'
import Seed from './Seed'

export default class SeedList extends Component {
   render() {
      return (
         <ul>
            {this.props.seeds.map(seed =>
               <Seed
               key = {seed.id}
               {...seed}
               />
            )}
         </ul>
      )
   }
}
