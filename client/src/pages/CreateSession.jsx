import { useState } from "react";
import Input from "../components/Input";
import PageLayout from "../layout/PageLayout";
import { postRequest } from "../utils/requests";
import toast from "react-hot-toast";

const CreateSession = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading("Creating Session");
    postRequest("/session/create", { name })
      .then((data) => {
        toast.success("Session Created");
        // console.log(data.msg);
      })
      .catch(() => {
        toast.error("Session Creation Failed");
        // console.log("");
      });
  };

  return (
    <PageLayout>
      <div className="font-semibold text-xl">Create New Session</div>
      <div className="flex justify-center">
        <form className="w-10/12 max-w-md mt-10" onSubmit={handleSubmit}>
          <Input
            handleChange={handleChange}
            value={name}
            name={"session-name"}
            label={"Session Name"}
          />

          <button className="text-white bg-gray-700 hover:bg-gray-800 w-full py-2 rounded-full font-semibold mt-4">
            Add
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default CreateSession;
