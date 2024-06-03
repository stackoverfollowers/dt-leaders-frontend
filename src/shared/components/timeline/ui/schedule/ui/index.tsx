import { ScheduleContent } from "./content"
import { ScheduleHeader } from "./header"

export const TimelineContent = () => {
  return (
    <div className="flex-[1_1_100%]">
      <ScheduleHeader />
      <ScheduleContent />
    </div>
  )
}