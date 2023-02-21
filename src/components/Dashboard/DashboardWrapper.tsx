import Header from "@components/Header";
import React from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}
const DashboardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="container flex items-start">
        <Sidebar />
        <div className="flex-auto p-4 !pr-0 sm:p-6">{children}</div>
      </section>
    </>
  );
};

export default DashboardWrapper;
