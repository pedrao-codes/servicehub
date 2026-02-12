export default function StaticCard({ label, value, Icon, className }) {
  return (
    <div className="card card-shadow grid grid-cols-3 gap-2 bg-white">
      <Icon
        size={48}
        className={'block w-full h-full p-6 text-white rounded-l ' + className}
      />

      <div className="flex flex-col col-start-2 col-span-2 gap-2 p-4">
        <span className="font-medium text-gray-500">{label}</span>
        <span className="font-bold text-4xl">{value}</span>
      </div>
    </div>
  )
}
