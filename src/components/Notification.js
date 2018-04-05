import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

class Notification extends React.Component {
  render() {
    if (this.props.notification.length === 0) {
      return null
    }

    return (
      <div className="ui negative message">
        <div className="header">{this.context.store.getState().notification}</div>
        {/*<p>smaller text</p>*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

Notification.contextTypes = {
  store: PropTypes.object
}


export default connect(mapStateToProps)(Notification)