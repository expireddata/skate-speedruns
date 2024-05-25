import { Link } from "react-router-dom";
import { InfoSection } from "../speedrun.models";
import { getSectionPath } from "../utils";

export const Index = ({ sections }: { sections: InfoSection[] }) => {
  return (
    <>
      <div className="intro-section">
        This guide contains all the information you need to speedrun skate 2.
        Check out the set up and general tips and tricks, then try go through a
        run using the individual challenge section as a guide.
      </div>
      {sections.map((section) => (
        <div className="link">
          <Link to={getSectionPath(section)}>{section.name}</Link>
        </div>
      ))}
    </>
  );
};
