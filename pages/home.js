import Layout from '../components/layout'
import "../styles/styles.scss"

export default class Home extends React.Component {

  render() {
    return (
      <Layout>
        <div>
          <p>Happy birthday emily!</p>
        </div>
        <iframe src="/canvas/index.html" />
      </Layout>
    )
  }
}
