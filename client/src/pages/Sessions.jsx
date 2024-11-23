import { useEffect, useState } from "react";
import { getRequest } from "../utils/requests";

const Sessions = () => {
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    getRequest("")
      .then((data) => {
        setSessions(data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      <div className="font-semibold text-xl">Sessions</div>

      <div>
        {sessions?.map((item) => (
          <div key={item._id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Sessions;
