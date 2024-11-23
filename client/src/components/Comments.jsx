import Input from "./Input";

const Comments = ({ options, handleChange }) => {
  return (
    <div>
      <div className="text-2xl">Comments</div>

      <Input
        handleChange={(e) =>
          handleChange("options", "teacher_comment", e.target.value)
        }
        label={"Teacher's Comment"}
        name={"teacher_comment"}
        value={options?.teacher_comment}
      />

      <Input
        handleChange={(e) =>
          handleChange("options", "principal_comment", e.target.value)
        }
        label={"Principal's Comment"}
        name={"principal_comment"}
        value={options?.principal_comment}
      />
    </div>
  );
};

export default Comments;
