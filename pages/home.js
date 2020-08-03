import Layout from '../components/layout'
import "../styles/styles.scss"

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      isRendered: false
    }
  }

  componentDidMount() {
    this.setState({
      isRendered: true
    })
  }

  render() {
    return (
      <Layout>
        {
          this.state.isRendered ? (
            <iframe src="/canvas/index.html" width="100vw" height="100vh"/>
          ) : ''
        }
        <div>
          <p>Happy birthday emily!</p>
        </div>
      </Layout>
    )
  }
}
