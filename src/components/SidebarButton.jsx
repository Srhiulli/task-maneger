import { tv } from "tailwind-variants"

const SidebarButton = ({ children, color }) => {
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
    <a href="#" className={sideBar({ color: color })}>
      {children}
    </a>
  )
}
export default SidebarButton
