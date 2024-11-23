import PageLayout from "../layout/PageLayout";
import { useEffect, useState } from "react";
import { getRequest } from "../utils/requests";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const terms = ["first", "second", "third"];

const SingleStudent = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const [currentTerm, setCurrentTerm] = useState("first");

  useEffect(() => {
    toast.loading("Loading Student");
    getRequest(`/students/${studentId}`)
      .then(({ result }) => {
        toast.success("Student Loaded");
        setDetails(result);
      })
      .catch((err) => {
        toast.success("Student Loading Failed");
        console.log(err.response);
      });
  }, []);

  return (
    <PageLayout>
      <div className="text-sm">
        <div>
          First Name:{" "}
          <span className="font-semibold capitalize">
            {details?.student?.firstName}
          </span>
        </div>
        <div>
          Last Name:{" "}
          <span className="font-semibold capitalize">
            {details?.student?.lastName}
          </span>
        </div>
        <div>
          Class:{" "}
          <span className="font-semibold capitalize">
            {details?.student?.studentClass}
          </span>
        </div>
        <div>
          Sex:{" "}
          <span className="font-semibold capitalize">
            {details?.student?.sex}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="">Result</div>

        <div className="flex justify-center gap-4 py-4">
          {terms.map((item) => (
            <div
              className={`capitalize text-sm cursor-pointer ${
                currentTerm === item && "font-semibold"
              }`}
              key={item}
              onClick={() => setCurrentTerm(item)}
            >
              {item}
            </div>
          ))}
        </div>

        <table border={1}>
          <thead>
            <tr>
              <th className="text-center">Subject</th>
              <th className="text-center">1st CA</th>
              <th className="text-center">2nd CA</th>
              <th className="text-center">3rd CA</th>
              <th className="text-center">Exam</th>
            </tr>
          </thead>

          <tbody>
            {details &&
              Object.entries(details?.result[currentTerm]).map(
                ([item, value], idx) => {
                  if (
                    item === "_id" ||
                    item === "attendace_res" ||
                    item === "traits" ||
                    item === "psychologicalTrait" ||
                    item === "holiday"
                  ) {
                    return;
                  }

                  return (
                    <tr key={idx}>
                      <td className="uppercase">{item}</td>
                      <td className="text-center">{value?.CA?.first}</td>
                      <td className="text-center">{value?.CA?.second}</td>
                      <td className="text-center">{value?.CA?.third}</td>
                      <td className="text-center">{value.exam}</td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>

        <div className="grid grid-cols-2 my-4 gap-4">
          <table>
            <tr>
              <th className="text-center">AFFECTIVE TRAITS</th>
              <th className="text-center">RATING</th>
            </tr>
            {details &&
              Object.entries(details.result[currentTerm].traits).map(
                ([key, value]) => {
                  if (key === "_id") {
                    return;
                  }
                  return (
                    <tr>
                      <td className="uppercase">{key}</td>
                      <td className="text-center">
                        {value === 0 ? "" : value}
                      </td>
                    </tr>
                  );
                }
              )}
          </table>

          <table>
            <tr>
              <th className="text-center">PSYCHOLOGICAL TRAIT</th>
              <th className="text-center">RATING</th>
            </tr>
            {details &&
              Object.entries(
                details.result[currentTerm].psychologicalTrait
              ).map(([key, value]) => {
                if (key === "_id") {
                  return;
                }
                return (
                  <tr>
                    <td className="uppercase">{key}</td>
                    <td className="text-center">{value === 0 ? "" : value}</td>
                  </tr>
                );
              })}
          </table>
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="border-2 border-gray-700 text-gray-700 mt-4 text-sm py-2 px-4 rounded-md font-semibold"
            onClick={() =>
              navigate(`/student/result/view/${studentId}/${currentTerm}`)
            }
          >
            View Result Sheet
          </button>
          <button
            className="bg-gray-700 text-white mt-4 text-sm py-2 px-4 rounded-md font-semibold"
            onClick={() =>
              navigate(`/student/result/${studentId}/${currentTerm}`)
            }
          >
            Update Result
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default SingleStudent;

{
  /* {details &&
            Object.entries(details?.results[currentTerm]).map(
              ([item, value], idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4">
                  <div className="uppercase border border-black">{item}</div>
                  <div>{value.CA}</div>
                  <div>{value.exam}</div>
                </div>
              )
            )} */
}
