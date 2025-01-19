import PropTypes from "prop-types"

function Header(props) {
  return <div className="flex w-full justify-between">{props.children}</div>
}

Header.prototype = {
  children: PropTypes.node.isRequired,
}

export default Header
