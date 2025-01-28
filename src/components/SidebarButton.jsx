import PropTypes from "prop-types"
import { tv } from "tailwind-variants"

const SidebarButton = ({ children, color, href }) => {
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
    <a href={href} className={sideBar({ color: color })}>
      {children}
    </a>
  )
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["unselected", "selected"]),
}
export default SidebarButton
