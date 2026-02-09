export default function Select({ name, values, className = '' }) {
  return (
    <div>
      <label htmlFor={name} className="text-gray-500 font-medium block pb-1">
        {name}
      </label>
      <select id={name} className={'input-base text-black font-medium ' + className}>
        {values.map((value) => (
          <option value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
