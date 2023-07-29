import useGenres from "../hooks/useGenres";
import { Genre } from "../types/genres";

const GenresAside = ({
  onSelectedGenre,
  selectedGenreId,
}: {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId: number | undefined;
}) => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <aside className="relative">
      <div className="sticky top-[70px]">
        {isLoading && (
          <span className="loading loading-spinner loading-lg absolute top-[300px] left-1/2"></span>
        )}

        <ul className="pl-6 mt-5">
          <li className="mb-4">
            <h1 className="text-3xl">Genres</h1>
          </li>
          {genres?.map((genre) => {
            const { id, name } = genre;

            return (
              <li
                onClick={(event) => {
                  onSelectedGenre(genre);
                }}
                key={id}
                id={name}
                className={`text-lg cursor-pointer hover:text-slate-100 mb-2 last:mb-0 ${
                  selectedGenreId === id ? "text-rose-700 font-bold" : ""
                }`}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default GenresAside;
