import { Outlet, Link, useLoaderData, Form } from "react-router-dom";

import { Navbar } from "../components/Navbar";

export async function action() {
  const contact = await createContact();
  return { contact };
}

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
