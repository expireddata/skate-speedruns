import "./App.css";
import { Index } from "./components/Index";
import { Section } from "./components/Section";
import {
  Link,
  Outlet,
  RouterProvider,
  createHashRouter,
  matchPath,
  useLocation,
} from "react-router-dom";
import { getSectionPath } from "./utils";
import sections from "./content.json";

const NavWrapper = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="nav">
        <div className="logo">Skate 2 Guide</div>
        {sections.map((section) => {
          return (
            <Link
              className={`link-item ${
                matchPath(getSectionPath(section), pathname)
                  ? "link-item-selected"
                  : ""
              }`}
              to={getSectionPath(section)}
            >
              <div>{section.name}</div>
            </Link>
          );
        })}
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

const routes = [
  {
    path: "/",
    element: <NavWrapper />,
    children: [
      ...sections.map((section) => ({
        path: getSectionPath(section),
        element: <Section {...section} />,
      })),
    ],
  },
];

const router = createHashRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
