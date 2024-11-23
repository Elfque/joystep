import { keys } from "../constant/keys";

const KeyMeaning = () => {
  return (
    <table border={1} className="text-xs">
      <tr>
        <th>KEY</th>
        <th>Meaning</th>
      </tr>

      {keys.map((item) => (
        <tr key={item.key}>
          <td>{item.key}</td>
          <td>{item.text}</td>
        </tr>
      ))}
    </table>
  );
};

export default KeyMeaning;
