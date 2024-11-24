import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { delRequest } from "../utils/requests";
import toast from "react-hot-toast";

const SingleStudent = ({ student, refresh }) => {
  const deleteStudent = () => {
    const comfirm = confirm(
      `Are you sure you want to delete ${student.firstName} ${student.lastName}`
    );

    if (comfirm) {
      toast.loading("Deleting Student");
      delRequest(`/students/${student._id}`)
        .then((data) => {
          toast.success("Student Deleted");
          refresh();
        })
        .catch(() => {
          toast.error("Error Deleting Student");
        });
    }
  };

  return (
    <div className="students-grid content">
      <Link to={`/student/${student._id}`}>{student.firstName}</Link>
      <Link to={`/student/${student._id}`}>{student.lastName}</Link>
      <div>
        <div className="flex gap-4 items-center h-full">
          <button>
            <CiEdit className="text-gray-700" />
          </button>
          <button onClick={deleteStudent}>
            <AiOutlineDelete className="text-red-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleStudent;
