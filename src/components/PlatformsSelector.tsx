import usePlatforms from "../hooks/usePlatforms";
import { Platforms } from "../types/platforms";

const PlatformsSelector = ({
  onChangePlatform,
}: {
  onChangePlatform: (plt: Platforms) => void,
}) => {
  const { data: platforms, error } = usePlatforms();

  return (
    <select
      defaultValue={"default-value"}
      className="select select-secondary w-full max-w-xs mb-6 ml-8"
    >
      <option disabled value="default-value">
        Platforms
      </option>

      {platforms?.map((plt) => {
        const { name, slug, id } = plt;
        return (
          <option
            value={slug}
            key={id}
            onClick={() => onChangePlatform(plt)}
          >
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default PlatformsSelector;
