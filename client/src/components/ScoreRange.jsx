import { grades } from "../constant/keys";

const ScoreRange = () => {
  return (
    <table border={1} className="text-xs">
      <tr>
        <th>SCORE RANGE</th>
        <th>GRADE</th>
        <th>MEANING</th>
      </tr>

      {grades.reverse().map((item) => (
        <tr key={item.key}>
          <td>{item.range}</td>
          <td>{item.grade}</td>
          <td className="capitalize">{item.meaning}</td>
        </tr>
      ))}
    </table>
  );
};

export default ScoreRange;
