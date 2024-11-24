import { useEffect, useState } from "react";
import { getRequest } from "../utils/requests";
import SingleStudent from "../atoms/SingleStudent";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const ExploreClass = ({ studentClass }) => {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRequest(`/students/class/${studentClass}`)
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  }, [refresh]);

  return (
    <div className="bg-gray-300/50 p-2 rounded-lg my-4">
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold mb-1">Students in {studentClass}</div>

        <Link
          to={`/student/create?studentClass=${studentClass}`}
          className="border-black border rounded-md text-xs p-2"
        >
          New Student
        </Link>
      </div>

      <div className="">
        {loading ? (
          <div className="flex justify-center py-4 bg-white rounded-md">
            <Loader />
          </div>
        ) : (
          <div>
            {students?.length < 1 ? (
              <div className="bg-gray-300/80 rounded-t-lg p-6 text-center text-sm">
                No Student(s) in this class
              </div>
            ) : (
              <>
                <div className="students-grid bg-gray-300/80 rounded-t-lg">
                  <div>First Name</div>
                  <div>Last Name</div>
                  <div>Actions</div>
                </div>

                <div className="bg-white rounded-b-md">
                  {students?.map((item) => (
                    <SingleStudent
                      student={item}
                      key={item._id}
                      refresh={() => setRefresh(!refresh)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreClass;
