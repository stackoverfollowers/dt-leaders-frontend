import { TimelineHead } from "../../../../ui/common"


export const SidebarHeader = () => {
  return (
    <div className="border-b">
      <div className="grid grid-cols-8 font-bold h-24">
        <TimelineHead className="col-span-4 p-4 border-r">Дополнительные модальности</TimelineHead>
        <TimelineHead className="col-span-2 p-4 border-r">Ставка</TimelineHead>
        <TimelineHead className="col-span-2 p-4">Таб.№</TimelineHead>
      </div>
    </div>
  )
}