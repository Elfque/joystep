const Input = ({ type, value, handleChange, name, label }) => {
  return (
    <div className="w-full my`-2">
      <div className="input-label">{label}</div>

      <input
        type={type ?? "text"}
        className="p-2 text-sm border border-gray-300 block outline-none rounded-md w-full mt-1"
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
