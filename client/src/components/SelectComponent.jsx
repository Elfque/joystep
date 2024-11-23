import Select from "react-select";

const SelectComponent = ({ name, options, setter, label }) => {
  return (
    <div className="my-2">
      <div className="input-label">{label}</div>
      <Select
        options={options}
        onChange={(e) => {
          setter((ev) => {
            return { ...ev, [name]: e.value };
          });
        }}
        styles={{
          control: (styles) => ({
            ...styles,
            outline: "none",
            marginTop: "4px",
          }),
        }}
      />
    </div>
  );
};

export default SelectComponent;
