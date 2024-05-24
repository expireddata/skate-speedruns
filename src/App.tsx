import "./App.css";
import { Index } from "./components/Index";
import { Section } from "./components/Section";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { getSectionPath } from "./utils";
import sections from "./content.json";

const routes = [
  ...sections.map((section) => ({
    path: getSectionPath(section),
    element: <Section {...section} />,
  })),
  {
    path: "/",
    element: <Index sections={sections} />,
  },
];

const router = createHashRouter(routes);

function App() {
  return (
    <div className="App">
      <h1>Expired Data's Skate 2 Speedrun guide</h1>
      <RouterProvider router={router} baseName="/skate-speedruns" />
    </div>
  );
}

export default App;
