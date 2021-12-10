import axios from 'axios'

import Layout from '../components/layout'
import "../styles/styles.scss"

export default class Home extends React.Component {

  componentDidMount() {
    this.setState({
      isRendered: true
    })
  }

  render() {
    return (
      <Layout>
        <div className="about-page">
          <h1>About us</h1>
          <br/>
          <p>
            We are songcamp.
          </p>
        </div>
        <div className="nav-link">
          <a href="/">Back</a>
        </div>
      </Layout>
    )
  }
}
