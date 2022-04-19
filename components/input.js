export default function Input({
  label,
  name,
  kind = "text",
  register,
  type,
  required,
}) {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      {kind === "text" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="text-gray-500">KRW</span>
          </div>
        </div>
      ) : null}
      {kind === "givenSelect" ? (
        <div>
          <select
            id={name}
            required={required}
            {...register}
            type={type}
            className="rounded-md w-full appearance-none px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option givenTalent="" disabled smusicted>
              가르쳐 줄 재능 선택
            </option>
            <option givenTalent="datauage">어학</option>
            <option givenTalent="cooking">요리</option>
            <option givenTalent="sport">스포츠</option>
            <option givenTalent="music">음악</option>
            <option givenTalent="crafts">공예</option>
            <option givenTalent="ccomputer">컴퓨터</option>
            <option givenTalent="data">교양</option>
            <option givenTalent="fasion">패션</option>
            <option givenTalent="coding">코딩</option>
            <option givenTalent="data">데이터 분석</option>
            <option givenTalent="dance">연기/춤</option>
            <option givenTalent="etc">기타</option>
          </select>
        </div>
      ) : null}
      {kind === "receivedSelect" ? (
        <div>
          <select
            id={name}
            required={required}
            {...register}
            type={type}
            className="rounded-md w-full appearance-none px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option givenTalent="" disabled smusicted>
              가르쳐 줄 재능 선택
            </option>
            <option receivedTalent="datauage">어학</option>
            <option receivedTalent="cooking">요리</option>
            <option receivedTalent="sport">스포츠</option>
            <option receivedTalent="music">음악</option>
            <option receivedTalent="crafts">공예</option>
            <option receivedTalent="ccomputer">컴퓨터</option>
            <option receivedTalent="data">교양</option>
            <option receivedTalent="fasion">패션</option>
            <option receivedTalent="coding">코딩</option>
            <option receivedTalent="data">데이터 분석</option>
            <option receivedTalent="dance">연기/춤</option>
            <option receivedTalent="etc">기타</option>
          </select>
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ) : null}
    </div>
  );
}
