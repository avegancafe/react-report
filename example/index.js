import { Container, Text } from '../'
import { Component } from 'react'

const someTerms = [
  { id: 1, label: 'Deal Term 1' },
  { id: 1, label: 'Deal Term 1' },
  { id: 1, label: 'Deal Term 1' }
]

class DealTerms extends Component {
  render() {
    return (
      <Container>
        {someTerms.map(term => <Text>{term.label}</Text>)}
      </Container>
    )
  }
}
