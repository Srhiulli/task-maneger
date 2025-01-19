import PropTypes from "prop-types";
const InputErrorMessage = ({ children }) => {
  return <p className="text-red-500 text-xs text-left">{children}</p>;
}   

InputErrorMessage.prototype = {
  children: PropTypes.string.isRequired
}
export default InputErrorMessage;