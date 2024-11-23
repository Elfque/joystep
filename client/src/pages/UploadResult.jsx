import PageLayout from "../layout/PageLayout";
import { useEffect, useState } from "react";
import { getRequest, postRequest } from "../utils/requests";
import { useParams } from "react-router-dom";
import AttendanceReport from "../components/AttendanceReport";
import toast from "react-hot-toast";

const UploadResult = () => {
  const { studentId, term } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    toast.loading("Loading Result");
    getRequest(`/students/${studentId}`)
      .then(({ result }) => {
        toast.success("Result Loaded");
        // console.log(result);
        setDetails(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleChange = (item, type, value, pos) => {
    if (type === "CA") {
      setDetails((prevDetails) => {
        return {
          ...prevDetails,
          result: {
            ...details.result,
            [term]: {
              ...details.result[term],
              [item]: {
                ...details.result[term][item],
                [type]: { ...details.result[term][item][type], [pos]: value },
              },
            },
          },
        };
      });
    } else {
      setDetails((prevDetails) => {
        return {
          ...prevDetails,
          result: {
            ...details.result,
            [term]: {
              ...details.result[term],
              [item]: { ...details.result[term][item], [type]: value },
            },
          },
        };
      });
    }
  };

  const handleSubmit = () => {
    toast.loading("Updating Result");
    postRequest(`/result/${details._id}`, { result: details.result })
      .then((data) => {
        toast.success("Result Updated");
        console.log(data);
      })
      .catch((err) => {
        toast.error("Result Updating Failed");
        // console.log(err.response);
      });
  };

  return (
    <PageLayout>
      <div className="text-sm">
        <div>
          Uploading the result of{" "}
          <span className="font-semibold capitalize">
            {details?.student?.firstName}
          </span>{" "}
          <span className="font-semibold capitalize">
            {details?.student?.lastName}
          </span>{" "}
          in{" "}
          <span className="font-semibold capitalize">
            {details?.student?.studentClass}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="">Result</div>

        <table border={1}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>1st CA</th>
              <th>2nd CA</th>
              <th>3rd CA</th>
              <th>CLASS AVERAGE</th>
              <th>CLASS HIGHEST</th>
              <th>CLASS LOWEST</th>
              <th>Exam</th>
            </tr>
          </thead>

          <tbody>
            {details &&
              Object.entries(details?.result[term]).map(
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
                      <td>
                        <input
                          type="number"
                          onChange={(e) =>
                            handleChange(item, "CA", e.target.value, "first")
                          }
                          value={value?.CA?.first ?? 0}
                          className="no-border-input"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={(e) =>
                            handleChange(item, "CA", e.target.value, "second")
                          }
                          value={value?.CA?.second ?? 0}
                          className="no-border-input"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={(e) =>
                            handleChange(item, "CA", e.target.value, "third")
                          }
                          value={value?.CA?.third ?? 0}
                          className="no-border-input"
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          onChange={(e) =>
                            handleChange(item, "class_average", e.target.value)
                          }
                          value={value.class_average}
                          className="no-border-input"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={(e) =>
                            handleChange(item, "class_highest", e.target.value)
                          }
                          value={value.class_highest}
                          className="no-border-input"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={(e) =>
                            handleChange(item, "class_lowest", e.target.value)
                          }
                          value={value.class_lowest}
                          className="no-border-input"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          onChange={(e) =>
                            handleChange(item, "exam", e.target.value)
                          }
                          value={value.exam}
                          className="no-border-input"
                        />
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>

        <div className="my-4">
          {details && (
            <AttendanceReport
              report={details?.result[term]?.attendace_res}
              handleChange={handleChange}
            />
          )}
        </div>

        <div className="grid my-4 gap-4">
          <table>
            <tr>
              <th className="text-center">AFFECTIVE TRAITS</th>
              <th className="text-center" colSpan={5}>
                RATING
              </th>
            </tr>
            {details &&
              Object.entries(details.result[term].traits).map(
                ([key, value]) => {
                  if (key === "_id") {
                    return;
                  }
                  return (
                    <tr>
                      <td className="uppercase">{key}</td>
                      {[1, 2, 3, 4, 5].map((item, index) => (
                        <td className="text-center" key={index}>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={value === item}
                            onClick={() => handleChange("traits", key, item)}
                          />
                        </td>
                      ))}
                    </tr>
                  );
                }
              )}
          </table>

          <table>
            <tr>
              <th className="text-center">PSYCHOLOGICAL TRAIT</th>
              <th className="text-center" colSpan={5}>
                RATING
              </th>
            </tr>
            {details &&
              Object.entries(details.result[term].psychologicalTrait).map(
                ([key, value]) => {
                  if (key === "_id") {
                    return;
                  }
                  return (
                    <tr>
                      <td className="uppercase">{key}</td>
                      {[1, 2, 3, 4, 5].map((item, index) => (
                        <td className="text-center" key={index}>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={value === item}
                            onClick={() =>
                              handleChange("psychologicalTrait", key, item)
                            }
                          />
                        </td>
                      ))}
                    </tr>
                  );
                }
              )}
          </table>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-gray-700 text-white mt-4 text-sm py-2 px-4 rounded-md font-semibold"
            onClick={handleSubmit}
          >
            Submit Result
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default UploadResult;
