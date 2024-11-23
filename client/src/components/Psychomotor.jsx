import SingleTrait from "../atoms/SingleTrait";

const Psychomotor = () => {
  return (
    <div>
      <table>
        <tr className="text-xs">
          <th className="text-center">PSYCHOMOTOR SKILLS</th>
          <th className="text-center">RATING</th>
        </tr>

        <tbody className="text-xs">
          <SingleTrait />
          <SingleTrait />
          <SingleTrait />
          <SingleTrait />
          <SingleTrait />
          <SingleTrait />
          <SingleTrait />
        </tbody>
      </table>
    </div>
  );
};

export default Psychomotor;
