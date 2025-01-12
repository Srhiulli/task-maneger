const Button = ({ children, variant = "primary" }) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white"
    }
    if (variant === "secundary") {
      return "bg-transparent text-[#818181]"
    }
  }
  return (
    <button
      className={`flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold transition-all hover:opacity-75 ${getVariantClasses()}`}
    >
      {children}
    </button>
  )
}

export default Button
