import Input from "./Input";

const AttendanceReport = ({ report, handleChange }) => {
  return (
    <div>
      <div className="text-2xl">Attendance Report</div>

      <div className="grid gap-2">
        <Input
          handleChange={(e) =>
            handleChange("attendace_res", "opened", e.target.value)
          }
          label={"No of Times Opened"}
          name={"opened"}
          value={report?.opened}
        />
        <Input
          handleChange={(e) =>
            handleChange("attendace_res", "present", e.target.value)
          }
          label={"No of Times Present"}
          name={"present"}
          value={report?.present}
        />
        <Input
          handleChange={(e) =>
            handleChange("attendace_res", "absent", e.target.value)
          }
          label={"No of Times Absent"}
          name={"absent"}
          value={report?.absent}
        />
      </div>
    </div>
  );
};

export default AttendanceReport;
