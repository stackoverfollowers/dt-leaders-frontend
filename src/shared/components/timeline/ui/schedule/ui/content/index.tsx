export const ScheduleContent = () => {
  return (
    <div className="grid grid-flow-row auto-rows-[minmax(100px,auto)]">
      {[...Array(4)].map((_, idx) => (
        <div key={idx} className="p-4 border-b last:border-0">ScheduleContent</div>
      ))}
    </div>
  )
}