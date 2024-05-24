import { Link } from "react-router-dom";
import { InfoSection } from "../speedrun.models";
import { getSectionPath } from "../utils";

export const Index = ({ sections }: { sections: InfoSection[] }) => {
  return (
    <>
      {sections.map((section) => (
        <div className="link">
          <Link to={getSectionPath(section)}>{section.name}</Link>
        </div>
      ))}
    </>
  );
};
