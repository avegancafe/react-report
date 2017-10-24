import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Column} from 'react-excel'
import {Text} from 'react-pdf'

const sectionMapping = {
  pdf: Text,
  xls: Column,
  web: React.createFactory('div')
}

class Text extends Component {
  render() {
    const TargetComponent = sectionMapping[this.props.target]

    return (
      <TargetComponent>
        {this.props.children}
      </TargetComponent>
    )
  }
}

Text.propTypes = {
  children: PropTypes.string,
  target: PropTypes.string.isRequired
}

Text.defaultProps = {
  children: [],
  target: 'web'
}

export default Text

