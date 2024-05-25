import { InfoSection } from "./speedrun.models";

export const getSectionPath = (section: InfoSection): string =>
  `/skate-speedruns/${encodeURIComponent(
    section.name.replaceAll(" ", "-").toLowerCase()
  )}`;

type Console = "playStation" | "xbox";

const keyMaps: { [k: string]: { [k in Console]: string } } = {
  "%y%": { xbox: "⇑", playStation: "⇡" },
  "%x%": { xbox: "⇐", playStation: "⇠" },
  "%a%": { xbox: "⇓", playStation: "⇣" },
  "%b%": { xbox: "⇒", playStation: "⇢" },
};

export const ConsoleAware = ({
  content,
  gamesConsole,
}: {
  content: string;
  gamesConsole?: Console | undefined;
}) => {
  const splits = Object.keys(keyMaps).reduce(
    (acc, cur) =>
      acc.map((v) => v.split(new RegExp(`(?=${cur})|(?<=${cur})`))).flat(),
    [content]
  );

  return (
    <>
      {splits.map((split) =>
        keyMaps[split] ? (
          <span className="console-key">
            {keyMaps[split][gamesConsole || "xbox"]}
          </span>
        ) : (
          split
        )
      )}
    </>
  );
};
