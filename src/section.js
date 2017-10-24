import React, {Component} from 'react'
import {Worksheet} from 'react-excel'
import {Page} from 'react-pdf'

const sectionMapping = {
  pdf: Page,
  xls: Worksheet,
  web: React.createFactory('div')
}

export default class extends Component {
  render() {
    const TargetComponent = sectionMapping[this.props.target]

    return (
      <TargetComponent>
        {this.props.children}
      </TargetComponent>
    )
  }
}
