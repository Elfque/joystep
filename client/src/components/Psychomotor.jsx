import SingleTrait from "../atoms/SingleTrait";

const Psychomotor = ({ trait }) => {
  return (
    <div>
      <table>
        <tr className="text-xs">
          <th className="text-center">PSYCHOMOTOR SKILLS</th>
          <th className="text-center">RATING</th>
        </tr>

        <tbody className="text-xs">
          {Object.entries(trait).map(([key, value]) => {
            if (key === "_id") return;

            return <SingleTrait key={key} rating={value} trait={key} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Psychomotor;
