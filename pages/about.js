import axios from 'axios'

import Layout from '../components/layout'
import "../styles/styles.scss"

import data from '../public/data.json';

export default class Home extends React.Component {

  componentDidMount() {
    this.setState({
      isRendered: true
    })
  }

  render() {

    const sorted = data.sort((a, b) => (a.from > b.from) ? 1 : -1)

    return (
      <Layout>
        <div className="about-page">
          <h1>with love from:</h1>
          <br/>
          {
            data.map( item => (
              <div>
                <p>{ item.from }</p>
              </div>
            ))
          }
        </div>
        <div className="nav-link">
          <a href="/">Back</a>
        </div>
      </Layout>
    )
  }
}
