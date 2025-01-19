import PropTypes from "prop-types"
import { forwardRef } from "react"

import InputErrorMessage from "./InputErrorMessage"
import InputLabel from "./InputLabel"

const SelectTime = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Período</InputLabel>
      <select
        id="time"
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        {...props}
        ref={ref}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="night">Noite</option>
      </select>

      {props.errorMessage && (
        <InputErrorMessage>{props.errorMessage}</InputErrorMessage>
      )}
    </div>
  )
})
SelectTime.displayName = "SelectTime"

SelectTime.propTypes = {
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}
export default SelectTime
