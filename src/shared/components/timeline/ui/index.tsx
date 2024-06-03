import { TimelineContent } from './schedule/ui';
import { TimelineSidebar } from './sidebar/ui';

export const Timeline = () => {
  return (
    <div className="inline-flex relative w-full">
      <div className="flex w-full rounded-md border">
        <TimelineSidebar />
        <TimelineContent />
      </div>
    </div>
  )
}