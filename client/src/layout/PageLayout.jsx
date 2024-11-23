import Sidebar from "../components/Sidebar";

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Sidebar />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default PageLayout;
