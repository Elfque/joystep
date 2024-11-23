const SingleTrait = ({ trait, rating }) => {
  return (
    <tr>
      <td className="uppercase">{trait}</td>
      <td className="text-center">{rating}</td>
    </tr>
  );
};

export default SingleTrait;
