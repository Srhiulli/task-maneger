import PropTypes from "prop-types"
const InputErrorMessage = ({ children }) => {
  return <p className="text-left text-xs text-red-500">{children}</p>
}

InputErrorMessage.prototype = {
  children: PropTypes.string.isRequired,
}
export default InputErrorMessage
