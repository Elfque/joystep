import { useEffect, useState } from "react";
import { getRequest } from "../utils/requests";
import { useParams } from "react-router-dom";
import Traits from "../components/Traits";
import Psychomotor from "../components/Psychomotor";
import KeyMeaning from "../components/KeyMeaning";
import ScoreRange from "../components/ScoreRange";
import schoolLogo from "../assets/logo.PNG";
import toast from "react-hot-toast";

const ResultSheet = () => {
  const { studentId, term } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    toast.loading("Loading Result");
    getRequest(`/students/${studentId}`)
      .then(({ result }) => {
        toast.success("Result Loaded");
        setDetails(result);
        // console.log(result);
      })
      .catch((err) => {
        toast.error("Result Loading Failed");
        console.log(err.response);
      });
  }, []);

  return (
    <div className="w-[55rem] mx-auto">
      <div className="flex gap-4 items-start">
        <img src={schoolLogo} alt="" className="w-28" />

        <div className="">
          <div className="uppercase font-extrabold text-4xl">
            Joystep academy
          </div>
          <div className="font-semibold text-sm">Raising God's Heritage</div>
          <div className="font-semibold text-sm">
            Address : Angwan Jagba Along Kwali Central Market, Kwali FCT - Abuja
          </div>
          <div className="font-semibold text-sm">
            Phone No: +234 915 460 0179
          </div>
          <div className="font-semibold text-sm">Email : email@email.com</div>
        </div>
      </div>

      <div>
        <div className="text-center font-semibold uppercase">{term} term</div>
      </div>
      <div className="result-top-grid border-collapse">
        <div className="col-span-3">
          <div>
            <div>Session:</div>
            <div>{details?.session?.name}</div>
          </div>

          <div>
            <div>Name of student:</div>
            <div>
              {details?.student?.firstName} {details?.student?.lastName}
            </div>
          </div>

          <div>
            <div>Class:</div>
            <div>{details?.student?.studentClass}</div>
          </div>
        </div>

        <div className="col-span-2">
          <div>
            <div>Term:</div>
            <div>
              {term === "first" ? "1st" : term === "second" ? "2nd" : "3rd"}
            </div>
          </div>

          <div>
            <div>Reg No:</div>
            <div></div>
          </div>

          <div>
            <div>Next Term Begin:</div>
            <div></div>
          </div>
        </div>

        <div className="col-span-2">
          {/* <div>
            <div>Session:</div>
            <div>{details?.session?.name}</div>
          </div>

          <div>
            <div>Name of student:</div>
            <div>
              {details?.student?.firstName} {details?.student?.lastName}
            </div>
          </div>

          <div>
            <div>Class:</div>
            <div>{details?.student?.studentClass}</div>
          </div> */}
        </div>

        <div className="col-span-3">
          <div>
            <div>Position in class:</div>
            <div>--</div>
          </div>

          <div>
            <div>Position in class section:</div>
            <div>--</div>
          </div>

          <div>
            <div>Overall total score:</div>
            <div>0</div>
          </div>

          <div>
            <div>Student's average score:</div>
            <div>0</div>
          </div>

          <div>
            <div>Highest average in class section:</div>
            <div>-</div>
          </div>
        </div>

        <div className="col-span-2">
          <div>
            <div>No of student in class:</div>
            <div>--</div>
          </div>

          <div>
            <div>No of student in class section:</div>
            <div>--</div>
          </div>

          <div>
            <div>Class section average score:</div>
            <div>0</div>
          </div>

          <div>
            <div>Lowest average in class section:</div>
            <div>0</div>
          </div>

          <div>
            <div>Overall Performance:</div>
            <div>-</div>
          </div>
        </div>

        <div className="col-span-2">
          <div>
            <div>Number of Times Opened</div>
            <div className="pl-4">
              {details?.result[term]?.attendace_res?.opened}
            </div>
          </div>
          <div>
            <div>Number of Times Present</div>
            <div className="pl-4">
              {details?.result[term]?.attendace_res?.opened}
            </div>
          </div>
          <div>
            <div>Number of Times Absent</div>
            <div className="pl-4">
              {details?.result[term]?.attendace_res?.opened}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <table className="text-xs">
          <thead>
            <tr className="h-20 text-center">
              <th className="text-center">Subject</th>
              <th className="text-center">
                1st <br /> TEST <br /> <span className="text-[10px]">(10)</span>
              </th>
              <th className="text-center">
                2nd <br /> TEST <br /> <span className="text-[10px]">(10)</span>
              </th>
              <th className="text-center">
                3rd <br /> TEST <br /> <span className="text-[10px]">(10)</span>
              </th>
              <th className="text-center">
                4th <br /> TEST <br /> <span className="text-[10px]">(10)</span>
              </th>
              <th className="smallie">
                Exam <span className="text-[10px]">(60)</span>
              </th>
              <th className="smallie">
                Total <br /> scores
              </th>
              <th className="smallie">
                class <br /> highest
              </th>
              <th className="smallie">
                class <br /> lowest
              </th>
              <th className="smallie">
                class <br /> average
              </th>
              <th className="text-center">remark</th>
            </tr>
          </thead>

          <tbody>
            {details &&
              Object.entries(details?.result[term]).map(
                ([item, value], idx) => {
                  if (
                    item === "_id" ||
                    item === "attendace_res" ||
                    item === "holiday"
                  ) {
                    return;
                  }

                  return (
                    <tr key={idx}>
                      <td className="uppercase font-semibold">{item}</td>
                      <td className="text-center">{value?.CA?.first}</td>
                      <td className="text-center">{value?.CA?.second}</td>
                      <td className="text-center">{value?.CA?.third}</td>
                      <td className="text-center">{value?.CA?.forth}</td>
                      <td className="text-center">{value.exam}</td>
                      <td className="text-center">
                        {value?.CA?.first +
                          value?.CA?.second +
                          value?.CA?.third +
                          value?.CA?.forth +
                          value?.exam}
                      </td>
                      <td className="text-center">{value.class_highest}</td>
                      <td className="text-center">{value.class_lowest}</td>
                      <td className="text-center">{value.class_average}</td>
                      <td className="text-center">
                        {value.remark.trim() === ""
                          ? "---"
                          : value.remark.trim()}
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 grid-cols-3 my-1">
        <Traits />

        <Psychomotor />

        <div className="grid gap-2">
          <KeyMeaning />

          <ScoreRange />
        </div>
      </div>

      <div>
        <table className="text-xs">
          <tr className="text-cont">
            <td className="w-40">Teacher's comment:</td>
            <td className=""></td>
          </tr>

          <tr className="text-cont">
            <td className="w-40">Principals's comment:</td>
            <td className=""></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ResultSheet;

{
  /* <div className="grid grid-cols-2 my-2 items-center">
        <div>
          <table border={1} className="w-3/5 font-semibold text-sm">
            <tr>
              <td>Number of Times Opened</td>
              <td className="pl-4">
                {details?.result[term]?.attendace_res?.opened}
              </td>
            </tr>
            <tr>
              <td>Number of Times Present</td>
              <td className="pl-4">
                {details?.result[term]?.attendace_res?.opened}
              </td>
            </tr>
            <tr>
              <td>Number of Times Absent</td>
              <td className="pl-4">
                {details?.result[term]?.attendace_res?.opened}
              </td>
            </tr>
          </table>
        </div>

        <div className="flex justify-end">
          <table border={1} className="w-3/5 font-semibold text-sm">
            <tr>
              <td>Term Ended</td>
              <td className="pl-4">----</td>
            </tr>
            <tr>
              <td>Next Term Begin</td>
              <td className="pl-4">------</td>
            </tr>
            <tr>
              <td>Next Term School Fees</td>
              <td className="pl-4">-----</td>
            </tr>
            <tr>
              <td>Outstanding Bill</td>
              <td className="pl-4">-----</td>
            </tr>
          </table>
        </div>
      </div> */
}
