import PropTypes from "prop-types"
import { tv } from "tailwind-variants"

const Button = ({
  children,
  size = "small",
  color = "primary",
  className,
  ...rest
}) => {
  const button = tv({
    base: "flex items-center justify-center gap-1 rounded-md px-3 text-center text-xs font-semibold transition-all hover:opacity-75",
    variants: {
      color: {
        primary: "bg-brand-primary text-white",
        secundary: "bg-transparent text-brand-dark-gray",
        ghost: "bg-brand-light-gray text-brand-dark-blue",
      },
      size: {
        small: "py-1 text-xs",
        large: "py-2 text-sm",
      },
      defaultVariant: "color-primary size-small",
    },
  })

  return (
    <button className={button({ color: color, size, className })} {...rest}>
      {children}
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "secundary", "ghost"]),
  size: PropTypes.oneOf(["small", "large"]),
  className: PropTypes.string,
}

export default Button
