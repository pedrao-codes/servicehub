export default function Select({ name, values, className = '' }) {
  return (
    <div>
      <label htmlFor={name} className="text-gray-500 block pb-1">
        {name}
      </label>
      <select id={name} className={'input-base ' + className}>
        {values.map((value, key) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
