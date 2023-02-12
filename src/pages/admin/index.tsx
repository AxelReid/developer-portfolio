import CreateProject from "@components/Admin/CreateProject";
import Header from "@components/Header";

const AdminPage = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <CreateProject />
      </div>
    </>
  );
};

export default AdminPage;
