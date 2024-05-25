import { Link } from "react-router-dom";
import { InfoSection } from "../speedrun.models";
import { ConsoleAware } from "../utils";

const ContentSection = (
  contentSection: InfoSection["contentSections"][number]
) => {
  return (
    <div className="content-section">
      <h3>{contentSection.title}</h3>
      <div className="content-body">
        <div>
          {contentSection.description.split("\n").map((paragraph) => (
            <div className="paragraph">
              <ConsoleAware content={paragraph} />
            </div>
          ))}
        </div>
        <div className="video-player">
          {contentSection.videoUrl && (
            <iframe
              id="ytplayer"
              width="640"
              height="360"
              src={contentSection.videoUrl}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export const Section = (sectionInfo: InfoSection) => {
  return (
    <div className="section">
      <h2>{sectionInfo.name}</h2>
      {sectionInfo.contentSections.map((contentSection) => (
        <ContentSection key={contentSection.title} {...contentSection} />
      ))}
    </div>
  );
};
