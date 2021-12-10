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
        <div className="home-container">
          <p>Dear Reader,</p>

          <p>You have received this document due to your perceived alignment with the vision for CAMP. </p>

          <p>CAMP is a creative playground. </p>

          <p>CAMP exists steeped in the wisdom that the new internet we call “web3” unleashes wildly new and exciting paths to empower the Artist. </p>

          <p>Everything we thought we knew about how to fund, create, and release creative work is transforming. But this transformation process is young. We are so very early in our understanding as to where these new primitives can take us. </p>

          <p>What we do know, however, is that the ways we organize, create and realize value will only grow further away from that which we are used to. </p>

          <p>Thus, there is but one sane thing to do: play.</p>

          <p>CAMP is that very playground. We are an eclectic community of musicians, artists, hackers and operatives with a deep interest in throwing highly experimental ideas at the wall and seeing what sticks. We also collect our learnings from these experiments, and build the tools, platforms and protocols we need to create the world we want.  </p>

          <p>PROJECTS, THUS FAR:</p>

          <ul>
            <li>SONGCAMP</li>
            <li>ELEKTRA</li>
            <li>BPM</li>
            <li>CAMP LABS</li>
          </ul>

          <p>To learn more about these projects, please navigate to the following doc → A Pre-History of Camp</p>



          <p>CAMP is the communal garden from which these projects grow. A healthy supply of social, financial, and creative resources that can flow out to this ever-evolving fractal network of people and projects. </p>

          <p>CAMP is the hub and protocol for this ecosystem of interdependent communities.</p>

          <p>On Wednesday December 15th, CAMP will be made manifest. </p>

          <p>You will have the opportunity to support this vision and secure your membership to CAMP. This opportunity comes in the form of an NFT. </p>

          <ul>
            <li>Seeder NFT — 100 ETH. 6 available. Pre-selected.</li>
            <li>Planter NFT — 3.6 ETH. 40 available. Pre-selected.</li>
            <li>Forager NFT — 0.2 ETH. 280 available. Open to all. </li>
            <li>Camper NFT — Free. Available to all camp alumni + early supporters. </li>
          </ul>

          <p>If you are interested in getting involved or if you have additional questions, please contact Matthew Chaim at matthewbchaim@gmail.com.</p>

        </div>
        <div className="nav-link">
          <a href="/about">?</a>
        </div>
      </Layout>
    )
  }
}
  <li></li>