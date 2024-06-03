import { SidebarContent } from "./content"
import { SidebarHeader } from "./header"

export const TimelineSidebar = () => {
  return (
    <aside className="flex-[1_0_320px] border-r">
      <SidebarHeader />
      <SidebarContent />
    </aside>
  )
}