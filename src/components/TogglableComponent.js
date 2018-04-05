import React from 'react'



class Seeds extends React.Component {
    constructor() {
      super();
    }
  
    componentDidMount() {
      this.props.initializeSeeds()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}