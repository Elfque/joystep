import { useState } from "react";
import Input from "../components/Input";
import PageLayout from "../layout/PageLayout";
import SelectComponent from "../components/SelectComponent";
import { sexes, classes } from "../constant/selects";
import { postRequest } from "../utils/requests";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const initPayload = {
  firstName: "",
  lastName: "",
  studentClass: "",
  sex: "",
};

const CreateStudents = () => {
  const [searchParams] = useSearchParams();
  const studentClass = searchParams.get("studentClass");

  const [payLoad, setPayLoad] = useState({
    ...initPayload,
    studentClass: studentClass ?? "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPayLoad({ ...payLoad, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading("Creating Student");

    postRequest("/students/create", payLoad)
      .then((data) => {
        console.log(data.msg);
        toast.success("Student Created");
        setPayLoad(initPayload);
      })
      .catch(() => {
        toast.error("Student Creation Failed");
        // console.log("");
      });
  };

  return (
    <PageLayout>
      <div className="font-semibold text-xl">Create New Student</div>
      <div className="flex justify-center">
        <form className="w-10/12 max-w-md mt-10" onSubmit={handleSubmit}>
          <Input
            handleChange={handleChange}
            value={payLoad.firstName}
            name={"firstName"}
            label={"First Name"}
          />

          <Input
            handleChange={handleChange}
            value={payLoad.lastName}
            name={"lastName"}
            label={"Last Name"}
          />

          <SelectComponent
            options={sexes}
            name={"sex"}
            setter={setPayLoad}
            label={"Sex"}
          />

          {!studentClass && (
            <SelectComponent
              options={classes}
              name={"studentClass"}
              setter={setPayLoad}
              label={"Class"}
            />
          )}

          <button className="text-white bg-gray-700 hover:bg-gray-800 w-full py-2 rounded-full font-semibold mt-4">
            Add
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default CreateStudents;
