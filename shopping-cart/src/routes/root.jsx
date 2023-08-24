import { Outlet, Link, useLoaderData, Form } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import Home from "./home";

export async function action() {
  const contact = await createContact();
  return { contact };
}

export default function Root() {
  return (
    <>
      <div id="header">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
