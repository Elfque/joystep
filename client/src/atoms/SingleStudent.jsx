import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleStudent = ({ student }) => {
  return (
    <div className="students-grid content">
      <Link to={`/student/${student._id}`}>{student.firstName}</Link>
      <Link to={`/student/${student._id}`}>{student.lastName}</Link>
      <div>
        <div className="flex gap-4 items-center h-full">
          <button>
            <CiEdit className="text-gray-700" />
          </button>
          <button>
            <AiOutlineDelete className="text-red-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleStudent;
