import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { tv } from "tailwind-variants"

const SidebarButton = ({ children, to }) => {
  const sideBar = tv({
    base: "flex items-center gap-2 rounded-lg px-6 py-3",
    variants: {
      color: {
        unselected: "text-brand-dark-blue",
        selected: "bg-brand-primary bg-opacity-15 text-brand-primary",
      },
      defaultVariant: "color-unselected",
    },
  })

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        sideBar({ color: isActive ? "selected" : "unselected" })
      }
    >
      {children}
    </NavLink>
  )
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["unselected", "selected"]),
}
export default SidebarButton
