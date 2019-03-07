import React, { Component } from 'react'
import { graphql } from 'gatsby'

export const GatsbyQuery = graphql`
  {
    umdHub {
      articles {
        data {
          title
        }
      }
    }
  }
`

class ClientFetchingExample extends Component {


  render() {
    const {
      umdHub: { articles },
    } = this.props.data

    return (
      <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
        <h1>{articles.data[0].title} With His Pupper</h1>
        <p>
          Rick & Morty API data loads at build time. Dog API data loads at run
          time.
        </p>
      </div>
    )
  }
}

export default ClientFetchingExample