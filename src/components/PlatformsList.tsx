import { Platforms } from "../hooks/useGame";

const PlatformsList = ({
    parent_platforms,
}: {
    parent_platforms: { platform: Platforms }[];
}) => {
  return (
    <div className="flex items-center gap-1 flex-wrap p-2">
        {parent_platforms.map(({ platform }) => {
            return <div key={platform.id} className="badge badge-ghost hover:badge-primary cursor-none">{platform.name}</div>
        })}
    </div>
  );
};

export default PlatformsList;
