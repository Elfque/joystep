import Input from "./Input";

const StudentReport = ({ options, handleChange }) => {
  return (
    <div className="mt-4">
      <div className="text-2xl mb-2">Student Report</div>

      <Input
        handleChange={(e) =>
          handleChange("options", "position", e.target.value)
        }
        label={"Student Position"}
        name={"position"}
        value={options?.position}
      />

      <Input
        handleChange={(e) =>
          handleChange("options", "overallTotalCsore", e.target.value)
        }
        label={"Overall Total Score"}
        name={"overallTotalCsore"}
        value={options?.overallTotalCsore}
      />

      <Input
        handleChange={(e) =>
          handleChange("options", "studentAverage", e.target.value)
        }
        label={"Student Average Score"}
        name={"studentAverage"}
        value={options?.studentAverage}
      />

      <Input
        handleChange={(e) =>
          handleChange("options", "averageScore", e.target.value)
        }
        label={"Average Score"}
        name={"averageScore"}
        value={options?.averageScore}
      />

      <Input
        handleChange={(e) =>
          handleChange("options", "studentNo", e.target.value)
        }
        label={"No of student in class"}
        name={"studentNo"}
        value={options?.studentNo}
      />

      <Input
        handleChange={(e) =>
          handleChange("options", "overallPerformance", e.target.value)
        }
        label={"Overall Performance"}
        name={"overallPerformance"}
        value={options?.overallPerformance}
      />
    </div>
  );
};

export default StudentReport;
