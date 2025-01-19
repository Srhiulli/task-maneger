const Button = ({
  children,
  size = "small",
  variant = "primary",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-brand-primary text-white"
    }
    if (variant === "secundary") {
      return "bg-transparent text-brand-dark-gray"
    }
    if (variant === "ghost") {
      return "bg-brand-light-gray text-[#353B3E]"
    }
  }
  const getSizeClasses = () => {
    if (size === "small") {
      return " py-1 text-xs"
    }
    if (size === "large") {
      return " py-2 text-sm "
    }
  }
  return (
    <button
      className={`flex ${className} items-center justify-center gap-1 rounded-md px-3 text-center text-xs font-semibold transition-all hover:opacity-75 ${getSizeClasses()} ${getVariantClasses()}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
