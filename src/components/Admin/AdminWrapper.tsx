import Header from "@components/Header";
import { useSession } from "next-auth/react";
import React from "react";
import { Role } from "src/types/next-auth.d";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}
const AdminWrapper: React.FC<Props> = ({ children }) => {
  const { data: session } = useSession();
  return (
    <>
      <Header />
      <section className="container flex items-start">
        <Sidebar />
        <div className="flex-auto p-4 pr-0">
          {session?.role !== Role.ADMIN && (
            <div className="mb-4 bg-red-500/70 p-4 text-white">
              Non-admins can only view!
            </div>
          )}
          {children}
        </div>
      </section>
    </>
  );
};

export default AdminWrapper;
