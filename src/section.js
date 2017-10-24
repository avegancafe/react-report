import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Worksheet} from 'react-excel'
import {Page} from 'react-pdf'

const sectionMapping = {
  pdf: Page,
  xls: Worksheet,
  web: React.createFactory('div')
}

class Section extends Component {
  render() {
    const TargetComponent = sectionMapping[this.props.target]

    return (
      <TargetComponent>
        {this.props.children}
      </TargetComponent>
    )
  }
}

Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  target: PropTypes.string.isRequired
}

Section.defaultProps = {
  children: []
}

export default Section

