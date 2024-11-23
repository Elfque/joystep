import SingleTrait from "../atoms/SingleTrait";

const Traits = () => {
  return (
    <div>
      <table>
        <tr className="text-xs">
          <th className="text-center">AFFECTIVE TRAITS</th>
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

export default Traits;
