export const SidebarContent = () => {
  return (
    <div className="grid grid-flow-row auto-rows-[minmax(100px,auto)]">
      {[...Array(4)].map((_, idx) => (
        <div key={idx} className="grid grid-cols-8 border-b last:border-0">
          <div className="p-4 col-span-4 flex items-center justify-center text-center border-r">КТ,ММГ,ФЛГ, Денситометрия</div>
          <div className="p-4 col-span-2 flex items-center justify-center text-center border-r">1</div>
          <div className="p-4 col-span-2 flex items-center justify-center text-center">10008</div>
        </div>
      ))}
    </div>
  )
}