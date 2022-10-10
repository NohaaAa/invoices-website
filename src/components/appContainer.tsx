import { Layout } from "antd";
import Header from "./header";
import "../utils/styles/components/app-container.scss";
import InvoiceFormDrawer from "./invoiceFormDrawer";
import React, { useState } from "react";
import InvoicesListPage from "../pages/invoicesListPage";
import InvoiceDetailsPage from "../pages/invoiceDetailsPage";
const AppContainer = () => {
  const { Sider } = Layout;
  const [open, setOpen] = useState(false);
  // const openMenu = () => {
  //   setOpen(!open);
  // };
  return (
    <Layout>
      <Sider className="main-side">
        <Header />
      </Sider>
      <Layout className="main-layout">
        <div className="responsive-header">
          <Header />
        </div>
        {/* <button onClick={openMenu}>OPEN</button> */}
        {open && (
          <InvoiceFormDrawer
            showDrawer={true}
            hideDrawer={() => {
              setOpen(false);
            }}
          />
        )}
        {/* <InvoicesListPage /> */}
        <InvoiceDetailsPage />
      </Layout>
    </Layout>
  );
};
export default AppContainer;
