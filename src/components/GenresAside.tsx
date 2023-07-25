import useGenres from "../hooks/useGenres";

const GenresAside = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <aside>
      {isLoading && (
        <span className="loading loading-spinner loading-lg"></span>
      )}

      <ul className="pl-6 mt-5">
        {genres.map(({ id, name, games_count }) => {
          return <li key={id} id={name} className="text-lg cursor-pointer hover:text-slate-100 mb-2 last:mb-0">{name}</li>;
        })}
      </ul>
    </aside>
  );
};

export default GenresAside;
