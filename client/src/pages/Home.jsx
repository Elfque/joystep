import ExploreClass from "../components/ExploreClass";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <div className="text-3xl font-semibold">WELCOME TO JOYSTEP ACADEMY</div>
      <div className="text-gray-700">The students in Joystep Academy</div>

      <div>
        <ExploreClass studentClass={"JSS 1"} />
        <ExploreClass studentClass={"JSS 2"} />
        <ExploreClass studentClass={"JSS 3"} />
      </div>
    </PageLayout>
  );
};

export default Home;
