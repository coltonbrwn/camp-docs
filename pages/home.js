import Router from 'next/router'
import { get } from 'dotty'
import classnames from 'classnames'

import Nav from '../components/nav.js'
import { globalQuery } from '../lib/queries'
import Layout from '../components/layout'

import "../styles/styles.scss"

export default class Home extends React.Component {

  // static async getInitialProps({ req }) { }

  render() {
    const globals = get(this.props, 'globals.0' ) || {}
    return (
      <Layout>
        <div>
          <p>Happy birthday emily!</p>
        </div>
      </Layout>
    )
  }
}
