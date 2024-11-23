import Input from "./Input";

const Schoolfees = ({ options, handleChange }) => {
  return (
    <div className="my-4">
      <div>School fees and next term</div>
      <Input
        handleChange={(e) => handleChange("holiday", "debt", e.target.value)}
        label={"Outstanding Debt"}
        name={"debt"}
        value={options?.debt}
      />

      <Input
        handleChange={(e) =>
          handleChange("holiday", "next_term_fee", e.target.value)
        }
        label={"Next Term School fee"}
        name={"next_term_fee"}
        value={options?.next_term_fee}
      />

      <Input
        handleChange={(e) =>
          handleChange("holiday", "next_term_begin", e.target.value)
        }
        label={"Next Term Begin"}
        name={"next_term_begin"}
        value={options?.next_term_begin}
      />
    </div>
  );
};

export default Schoolfees;
