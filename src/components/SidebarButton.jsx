const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-brand-dark-blue"
    }
    if (variant === "selected") {
      return "bg-brand-primary bg-opacity-15 text-brand-primary"
    }
  }
  return (
    <a href="#" className={`"rounded-lg py-3" px-6 ${getVariantClasses()}`}>
      {children}
    </a>
  )
}
export default SidebarButton
