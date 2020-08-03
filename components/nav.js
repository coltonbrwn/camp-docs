import classnames from 'classnames'


const Link = props => (
  <li className={ classnames(props.className, { active: props.activeSlug === props.frameId})}>
    <a href={`${ props.frameId }`} data-frameid={ props.frameId }>
      { props.children }
    </a>
  </li>
)

class Nav extends React.Component {
  render() {
    return (
      <nav>
        
      </nav>
    )
  }
}

export default Nav;
