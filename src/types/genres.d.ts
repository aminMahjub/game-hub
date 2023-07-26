export interface Genre {
    id: number,
    name: string,
    games_count: number,
    slug: string
}

export interface FetchGenres {
    count: number,
    results: Genres[]
}

export type SelectedGenreType = Genres | null;